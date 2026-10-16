import { Router, Request, Response } from 'express';
import { CustomerModel } from '../models/Customer';
import { customers, Customer } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all customers
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbCustomers = await CustomerModel.find().sort({ id: 1 });
      return res.json({ success: true, data: dbCustomers });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: customers });
});

// GET customer by ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const customer = await CustomerModel.findOne({ id });
      if (!customer) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
      }
      return res.json({ success: true, data: customer });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const customer = customers.find((c) => c.id === id);
  if (!customer) {
    return res.status(404).json({ success: false, message: 'Customer not found' });
  }
  res.json({ success: true, data: customer });
});

// CREATE customer
router.post('/', async (req: Request, res: Response) => {
  const { shop, contact, phone, email, location, gstin, category, limit } = req.body;
  if (!shop || !contact || !phone) {
    return res.status(400).json({ success: false, message: 'Shop name, contact person, and phone are required' });
  }

  const initialBalance = req.body.balance !== undefined ? Number(req.body.balance) : 0;
  const creditLimit = limit !== undefined ? Number(limit) : 25000;

  try {
    if (isConnectedToMongoDB) {
      const lastCust = await CustomerModel.findOne().sort({ id: -1 });
      const nextId = req.body.id ? Number(req.body.id) : (lastCust ? lastCust.id + 1 : 1);
      const newCustomer = await CustomerModel.create({
        id: nextId,
        shop,
        contact,
        phone,
        email: email || '',
        location: location || '',
        gstin: gstin || '',
        category: category || 'General',
        limit: creditLimit,
        balance: initialBalance,
      });
      return res.status(201).json({ success: true, data: newCustomer });
    }
  } catch (err) {
    console.error('MongoDB create error, falling back:', err);
  }

  const nextId = req.body.id ? Number(req.body.id) : (customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1);
  const newCustomer: Customer = {
    id: nextId,
    shop,
    contact,
    phone,
    email: email || '',
    location: location || '',
    gstin: gstin || '',
    category: category || 'General',
    limit: creditLimit,
    balance: initialBalance,
  };
  customers.unshift(newCustomer);
  res.status(201).json({ success: true, data: newCustomer });
});

// UPDATE customer
router.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const updated = await CustomerModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB update error, falling back:', err);
  }

  const index = customers.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Customer not found' });
  }
  customers[index] = { ...customers[index], ...req.body, id };
  res.json({ success: true, data: customers[index] });
});

// DELETE customer
router.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isConnectedToMongoDB) {
      const removed = await CustomerModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB delete error, falling back:', err);
  }

  const index = customers.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Customer not found' });
  }
  const removed = customers.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

export default router;
