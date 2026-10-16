import { Router, Request, Response } from 'express';
import { SupplierModel } from '../models/Supplier';
import { suppliers, Supplier } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all suppliers
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbSuppliers = await SupplierModel.find().sort({ id: 1 });
      return res.json({ success: true, data: dbSuppliers });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: suppliers });
});

// GET supplier by ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const supplier = await SupplierModel.findOne({ id });
      if (!supplier) {
        return res.status(404).json({ success: false, message: 'Supplier not found' });
      }
      return res.json({ success: true, data: supplier });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const supplier = suppliers.find((s) => s.id === id);
  if (!supplier) {
    return res.status(404).json({ success: false, message: 'Supplier not found' });
  }
  res.json({ success: true, data: supplier });
});

// CREATE a new supplier
router.post('/', async (req: Request, res: Response) => {
  const { name, contact, phone, email, location, category, rating } = req.body;
  if (!name || !contact || !phone) {
    return res.status(400).json({ success: false, message: 'Supplier name, contact, and phone are required' });
  }

  try {
    if (isConnectedToMongoDB) {
      const lastSup = await SupplierModel.findOne().sort({ id: -1 });
      const nextId = req.body.id ? Number(req.body.id) : (lastSup ? lastSup.id + 1 : 1);
      const newSupplier = await SupplierModel.create({
        id: nextId,
        name,
        contact,
        phone,
        email: email || '',
        location: location || '',
        category: category || 'General Supplies',
        rating: Number(rating) || 4.5,
      });
      return res.status(201).json({ success: true, data: newSupplier });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const nextId = req.body.id ? Number(req.body.id) : (suppliers.length > 0 ? Math.max(...suppliers.map((s) => s.id)) + 1 : 1);
  const newSupplier: Supplier = {
    id: nextId,
    name,
    contact,
    phone,
    email: email || '',
    location: location || '',
    category: category || 'General Supplies',
    rating: Number(rating) || 4.5,
  };
  suppliers.unshift(newSupplier);
  res.status(201).json({ success: true, data: newSupplier });
});

// UPDATE supplier
router.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const updated = await SupplierModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Supplier not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB supplier update error, falling back:', err);
  }

  const index = suppliers.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Supplier not found' });
  }
  suppliers[index] = { ...suppliers[index], ...req.body, id };
  res.json({ success: true, data: suppliers[index] });
});

// DELETE supplier
router.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const removed = await SupplierModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Supplier not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const index = suppliers.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Supplier not found' });
  }
  const removed = suppliers.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

export default router;
