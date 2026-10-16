import { Router, Request, Response } from 'express';
import { NotificationModel } from '../models/Notification';
import { notifications } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all notifications
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbNotifs = await NotificationModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: dbNotifs });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: notifications });
});

// MARK notification as read
router.patch('/:id/read', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (isConnectedToMongoDB) {
      const notif = await NotificationModel.findOneAndUpdate({ id }, { $set: { read: true } }, { returnDocument: 'after' });
      if (!notif) {
        return res.status(404).json({ success: false, message: 'Notification not found' });
      }
      return res.json({ success: true, data: notif });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const notif = notifications.find((n) => n.id === id);
  if (!notif) {
    return res.status(404).json({ success: false, message: 'Notification not found' });
  }
  notif.read = true;
  res.json({ success: true, data: notif });
});

// MARK all as read
router.post('/mark-all-read', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      await NotificationModel.updateMany({}, { $set: { read: true } });
      const updated = await NotificationModel.find();
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  notifications.forEach((n) => {
    n.read = true;
  });
  res.json({ success: true, data: notifications });
});

// CREATE notification
router.post('/', async (req: Request, res: Response) => {
  const { category, title, message, severity, linkPage } = req.body;
  if (!title || !message) {
    return res.status(400).json({ success: false, message: 'Title and message are required' });
  }

  const id = req.body.id || `notif-${Date.now()}`;
  const time = req.body.time || 'Just now';
  const read = req.body.read === true;
  const sev = severity || 'info';
  const cat = category || 'System';

  try {
    if (isConnectedToMongoDB) {
      const newNotif = await NotificationModel.create({
        id,
        category: cat,
        title,
        message,
        time,
        read,
        severity: sev,
        linkPage: linkPage || '',
      });
      return res.status(201).json({ success: true, data: newNotif });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const newNotif = {
    id,
    category: cat,
    title,
    message,
    time,
    read,
    severity: sev,
    linkPage: linkPage || '',
  };
  notifications.unshift(newNotif as any);
  res.status(201).json({ success: true, data: newNotif });
});

// DELETE single notification
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (isConnectedToMongoDB) {
      const removed = await NotificationModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Notification not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const idx = notifications.findIndex((n) => n.id === id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: 'Notification not found' });
  }
  const removed = notifications.splice(idx, 1);
  res.json({ success: true, data: removed[0] });
});

// DELETE read notifications (clear read)
router.delete('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      await NotificationModel.deleteMany({ read: true });
      const remaining = await NotificationModel.find();
      return res.json({ success: true, data: remaining });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  for (let i = notifications.length - 1; i >= 0; i--) {
    if (notifications[i].read) {
      notifications.splice(i, 1);
    }
  }
  res.json({ success: true, data: notifications });
});

export default router;
