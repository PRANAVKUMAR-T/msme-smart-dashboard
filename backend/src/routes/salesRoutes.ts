import { Router, Request, Response } from 'express';
import { SaleOrderModel } from '../models/SaleOrder';
import { sales, SaleOrder } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all sales orders
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbSales = await SaleOrderModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: dbSales });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: sales });
});

// GET sale order by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const sale = await SaleOrderModel.findOne({ id });
      if (!sale) {
        return res.status(404).json({ success: false, message: 'Sale order not found' });
      }
      return res.json({ success: true, data: sale });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const sale = sales.find((s) => s.id === id);
  if (!sale) {
    return res.status(404).json({ success: false, message: 'Sale order not found' });
  }
  res.json({ success: true, data: sale });
});

// CREATE sale order
router.post('/', async (req: Request, res: Response) => {
  const { customer, product, quantity, amount, status } = req.body;
  if (!customer || !product || !amount) {
    return res.status(400).json({ success: false, message: 'Customer, product, and amount are required' });
  }

  const nowStr = req.body.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  try {
    if (isConnectedToMongoDB) {
      const count = await SaleOrderModel.countDocuments();
      const id = req.body.id || `INV${String(count + 1).padStart(3, '0')}`;
      const newSale = await SaleOrderModel.create({
        id,
        customer,
        product,
        quantity: Number(quantity) || 1,
        amount: Number(amount),
        date: nowStr,
        status: status === 'Pending' ? 'Pending' : 'Paid',
      });
      return res.status(201).json({ success: true, data: newSale });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const newSale: SaleOrder = {
    id: req.body.id || `INV${String(sales.length + 1).padStart(3, '0')}`,
    customer,
    product,
    quantity: Number(quantity) || 1,
    amount: Number(amount),
    date: nowStr,
    status: status === 'Pending' ? 'Pending' : 'Paid',
  };
  sales.unshift(newSale);
  res.status(201).json({ success: true, data: newSale });
});

// UPDATE sale order
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const updated = await SaleOrderModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Sale order not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB sale update error, falling back:', err);
  }

  const index = sales.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Sale order not found' });
  }
  sales[index] = { ...sales[index], ...req.body, id };
  res.json({ success: true, data: sales[index] });
});

// DELETE sale order
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const removed = await SaleOrderModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Sale order not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB sale delete error, falling back:', err);
  }

  const index = sales.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Sale order not found' });
  }
  const removed = sales.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

export default router;
