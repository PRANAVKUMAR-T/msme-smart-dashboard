import { Router, Request, Response } from 'express';
import { ProductModel } from '../models/Product';
import { products, Product } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// GET all products
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbProducts = await ProductModel.find().sort({ id: 1 });
      return res.json({ success: true, data: dbProducts });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }
  res.json({ success: true, data: products });
});

// GET product by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const product = await ProductModel.findOne({ id });
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      return res.json({ success: true, data: product });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
});

// CREATE product
router.post('/', async (req: Request, res: Response) => {
  const { name, stock, price, category, reorderLevel } = req.body;
  if (!name || stock === undefined || price === undefined) {
    return res.status(400).json({ success: false, message: 'Name, stock, and price are required' });
  }

  const rLevel = reorderLevel !== undefined ? Number(reorderLevel) : 10;

  try {
    if (isConnectedToMongoDB) {
      const count = await ProductModel.countDocuments();
      const id = req.body.id || `P${String(count + 1).padStart(3, '0')}`;
      const newProduct = await ProductModel.create({
        id,
        name,
        stock: Number(stock),
        price: Number(price),
        category: category || 'General',
        reorderLevel: rLevel,
      });
      return res.status(201).json({ success: true, data: newProduct });
    }
  } catch (err) {
    console.error('MongoDB product error, falling back:', err);
  }

  const newProduct: Product & { reorderLevel?: number } = {
    id: req.body.id || `P${String(products.length + 1).padStart(3, '0')}`,
    name,
    stock: Number(stock),
    price: Number(price),
    category: category || 'General',
    reorderLevel: rLevel,
  };
  products.unshift(newProduct as Product);
  res.status(201).json({ success: true, data: newProduct });
});

// UPDATE product stock / price
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const updated = await ProductModel.findOneAndUpdate({ id }, { $set: req.body }, { returnDocument: 'after' });
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      return res.json({ success: true, data: updated });
    }
  } catch (err) {
    console.error('MongoDB product error, falling back:', err);
  }

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  products[index] = { ...products[index], ...req.body, id };
  res.json({ success: true, data: products[index] });
});

// DELETE product
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (isConnectedToMongoDB) {
      const removed = await ProductModel.findOneAndDelete({ id });
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      return res.json({ success: true, data: removed });
    }
  } catch (err) {
    console.error('MongoDB product delete error, falling back:', err);
  }

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  const removed = products.splice(index, 1);
  res.json({ success: true, data: removed[0] });
});

export default router;
