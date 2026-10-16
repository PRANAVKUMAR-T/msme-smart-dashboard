import { Router, Request, Response } from 'express';
import { PurchaseOrderModel } from '../models/PurchaseOrder';
import { purchases, PurchaseOrder } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all purchase orders
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbPurchases = await PurchaseOrderModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: dbPurchases });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: purchases });
});

// GET purchase order by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const purchase = await PurchaseOrderModel.findOne({ id });
      if (!purchase) {
        return res.status(404).json({ success: false, message: 'Purchase order not found' });
      }
      return res.json({ success: true, data: purchase });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const purchase = purchases.find((p) => p.id === id);
  if (!purchase) {
    return res.status(404).json({ success: false, message: 'Purchase order not found' });
  }
  res.json({ success: true, data: purchase });
});

// CREATE purchase order
router.post('/', async (req: Request, res: Response) => {
  const { supplier, product, quantity, price, gst } = req.body;
  if (!supplier || !product || !price || !quantity) {
    return res.status(400).json({ success: false, message: 'Supplier, product, quantity, and price are required' });
  }

  const q = Number(quantity);
  const p = Number(price);
  const g = Number(gst) || 18;
  const subtotal = q * p;
  const total = req.body.total !== undefined ? Number(req.body.total) : Math.round(subtotal + (subtotal * g) / 100);
  const dateStr = req.body.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  try {
    if (isConnectedToMongoDB) {
      const count = await PurchaseOrderModel.countDocuments();
      const id = req.body.id || `PUR${String(count + 1).padStart(3, '0')}`;
      const newPurchase = await PurchaseOrderModel.create({
        id,
        supplier,
        product,
        quantity: q,
        price: p,
        gst: g,
        total,
        date: dateStr,
      });
      return res.status(201).json({ success: true, data: newPurchase });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const newPurchase: PurchaseOrder = {
    id: req.body.id || `PUR${String(purchases.length + 1).padStart(3, '0')}`,
    supplier,
    product,
    quantity: q,
    price: p,
    gst: g,
    total,
    date: dateStr,
  };
  purchases.unshift(newPurchase);
  res.status(201).json({ success: true, data: newPurchase });
});

// UPDATE purchase order
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const updated = await PurchaseOrderModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Purchase order not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB purchase update error, falling back:', err);
  }

  const index = purchases.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Purchase order not found' });
  }
  purchases[index] = { ...purchases[index], ...req.body, id };
  res.json({ success: true, data: purchases[index] });
});

// DELETE purchase order
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const removed = await PurchaseOrderModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Purchase order not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB purchase delete error, falling back:', err);
  }

  const index = purchases.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Purchase order not found' });
  }
  const removed = purchases.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

export default router;
