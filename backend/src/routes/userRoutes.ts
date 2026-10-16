import { Router, Request, Response } from 'express';
import { UserAccountModel } from '../models/UserAccount';
import { userAccounts, UserAccount } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbUsers = await UserAccountModel.find().sort({ id: 1 });
      return res.json({ success: true, data: dbUsers });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: userAccounts });
});

// GET user by ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const user = await UserAccountModel.findOne({ id });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      return res.json({ success: true, data: user });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const user = userAccounts.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  res.json({ success: true, data: user });
});

// CREATE user
router.post('/', async (req: Request, res: Response) => {
  const { name, email, role, status, allowedPages, password } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required' });
  }

  const joinedOn = req.body.joinedOn || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const userPassword = password || 'msme123';

  try {
    if (isConnectedToMongoDB) {
      const lastUser = await UserAccountModel.findOne().sort({ id: -1 });
      const nextId = req.body.id ? Number(req.body.id) : (lastUser ? lastUser.id + 1 : 1);
      const newUser = await UserAccountModel.create({
        id: nextId,
        name,
        email,
        role: role || 'Staff',
        status: status === 'Inactive' ? 'Inactive' : 'Active',
        joinedOn,
        allowedPages: Array.isArray(allowedPages) ? allowedPages : undefined,
        password: userPassword,
      });
      return res.status(201).json({ success: true, data: newUser });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const nextId = req.body.id ? Number(req.body.id) : (userAccounts.length > 0 ? Math.max(...userAccounts.map((u) => u.id)) + 1 : 1);
  const newUser: UserAccount = {
    id: nextId,
    name,
    email,
    role: role || 'Staff',
    status: status === 'Inactive' ? 'Inactive' : 'Active',
    joinedOn,
    allowedPages: Array.isArray(allowedPages) ? allowedPages : undefined,
    password: userPassword,
  };
  userAccounts.push(newUser);
  res.status(201).json({ success: true, data: newUser });
});

// UPDATE user
router.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  // Safeguard: Primary Administrator cannot have role or status degraded
  const isAdminUpdate = id === 1 || req.body.role === 'Administrator' || (req.body.email && req.body.email.toLowerCase() === 'admin@msmesmart.com');
  if (id === 1 || (req.body.email && req.body.email.toLowerCase() === 'admin@msmesmart.com')) {
    req.body.role = 'Administrator';
    req.body.status = 'Active';
    if (Array.isArray(req.body.allowedPages) && !req.body.allowedPages.includes('Admin')) {
      req.body.allowedPages = ['Admin', ...req.body.allowedPages];
    }
  }

  try {
    if (isConnectedToMongoDB) {
      const existing = await UserAccountModel.findOne({ id });
      if (existing && (existing.id === 1 || existing.role === 'Administrator' || existing.email === 'admin@msmesmart.com')) {
        req.body.role = 'Administrator';
        req.body.status = 'Active';
        if (Array.isArray(req.body.allowedPages) && !req.body.allowedPages.includes('Admin')) {
          req.body.allowedPages = ['Admin', ...req.body.allowedPages];
        }
      }
      const updated = await UserAccountModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB user update error, falling back:', err);
  }

  const index = userAccounts.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  if (userAccounts[index].id === 1 || userAccounts[index].role === 'Administrator' || userAccounts[index].email === 'admin@msmesmart.com') {
    req.body.role = 'Administrator';
    req.body.status = 'Active';
    if (Array.isArray(req.body.allowedPages) && !req.body.allowedPages.includes('Admin')) {
      req.body.allowedPages = ['Admin', ...req.body.allowedPages];
    }
  }

  userAccounts[index] = { ...userAccounts[index], ...req.body, id };
  res.json({ success: true, data: userAccounts[index] });
});

// DELETE user
router.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  // Prevent deleting Administrator account
  if (id === 1) {
    return res.status(403).json({ success: false, message: 'Primary Administrator account cannot be deleted to prevent system lockout.' });
  }

  try {
    if (isConnectedToMongoDB) {
      const existing = await UserAccountModel.findOne({ id });
      if (existing && (existing.role === 'Administrator' || existing.email === 'admin@msmesmart.com')) {
        return res.status(403).json({ success: false, message: 'Primary Administrator account cannot be deleted to prevent system lockout.' });
      }
      const removed = await UserAccountModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB user delete error, falling back:', err);
  }

  const index = userAccounts.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  if (userAccounts[index].role === 'Administrator' || userAccounts[index].email === 'admin@msmesmart.com') {
    return res.status(403).json({ success: false, message: 'Primary Administrator account cannot be deleted to prevent system lockout.' });
  }

  const removed = userAccounts.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

// TOGGLE user status
router.patch('/:id/status', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (id === 1) {
    return res.status(403).json({ success: false, message: 'Administrator account status must remain Active to prevent lockout.' });
  }

  try {
    if (isConnectedToMongoDB) {
      const user = await UserAccountModel.findOne({ id });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      if (user.role === 'Administrator' || user.email === 'admin@msmesmart.com') {
        return res.status(403).json({ success: false, message: 'Administrator account status must remain Active to prevent lockout.' });
      }
      user.status = user.status === 'Active' ? 'Inactive' : 'Active';
      await user.save();
      return res.json({ success: true, data: user });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const user = userAccounts.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  if (user.role === 'Administrator' || user.email === 'admin@msmesmart.com') {
    return res.status(403).json({ success: false, message: 'Administrator account status must remain Active to prevent lockout.' });
  }
  user.status = user.status === 'Active' ? 'Inactive' : 'Active';
  res.json({ success: true, data: user });
});

export default router;
