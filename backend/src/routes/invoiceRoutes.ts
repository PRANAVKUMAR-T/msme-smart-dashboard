import { Router, Request, Response } from 'express';
import { InvoiceModel } from '../models/Invoice';
import { invoices, InvoiceItem } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all invoices
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbInvoices = await InvoiceModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: dbInvoices });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: invoices });
});

// GET invoice by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const invoice = await InvoiceModel.findOne({ id });
      if (!invoice) {
        return res.status(404).json({ success: false, message: 'Invoice not found' });
      }
      return res.json({ success: true, data: invoice });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const invoice = invoices.find((i) => i.id === id);
  if (!invoice) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }
  res.json({ success: true, data: invoice });
});

// CREATE invoice
router.post('/', async (req: Request, res: Response) => {
  const { customer, amount, gst, dueDate, status } = req.body;
  if (!customer || !amount) {
    return res.status(400).json({ success: false, message: 'Customer and amount are required' });
  }

  const amt = Number(amount);
  const gstAmt = Number(gst) || Math.round(amt * 0.18);
  const total = req.body.total !== undefined ? Number(req.body.total) : amt + gstAmt;

  const now = new Date();
  const dateStr = req.body.date || now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const due = dueDate || new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  try {
    if (isConnectedToMongoDB) {
      const count = await InvoiceModel.countDocuments();
      const id = req.body.id || `INV${String(count + 1).padStart(3, '0')}`;
      const newInvoice = await InvoiceModel.create({
        id,
        customer,
        date: dateStr,
        dueDate: due,
        amount: amt,
        gst: gstAmt,
        total,
        status: status || 'Pending',
      });
      return res.status(201).json({ success: true, data: newInvoice });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const newInvoice: InvoiceItem = {
    id: req.body.id || `INV${String(invoices.length + 1).padStart(3, '0')}`,
    customer,
    date: dateStr,
    dueDate: due,
    amount: amt,
    gst: gstAmt,
    total,
    status: status || 'Pending',
  };
  invoices.unshift(newInvoice);
  res.status(201).json({ success: true, data: newInvoice });
});

// UPDATE invoice details
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const updated = await InvoiceModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Invoice not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB invoice update error, falling back:', err);
  }

  const index = invoices.findIndex((i) => i.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }
  invoices[index] = { ...invoices[index], ...req.body, id };
  res.json({ success: true, data: invoices[index] });
});

// UPDATE invoice status
router.patch('/:id/status', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    if (isConnectedToMongoDB) {
      const updated = await InvoiceModel.findOneAndUpdate({ id }, { $set: { status } }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Invoice not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const index = invoices.findIndex((i) => i.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }
  invoices[index].status = status;
  res.json({ success: true, data: invoices[index] });
});

// DELETE invoice
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const removed = await InvoiceModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Invoice not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB invoice delete error, falling back:', err);
  }

  const index = invoices.findIndex((i) => i.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }
  const removed = invoices.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

export default router;
