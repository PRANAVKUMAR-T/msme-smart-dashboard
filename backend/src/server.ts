import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB, isConnectedToMongoDB } from './config/db';
import customerRoutes from './routes/customerRoutes';
import supplierRoutes from './routes/supplierRoutes';
import salesRoutes from './routes/salesRoutes';
import purchaseRoutes from './routes/purchaseRoutes';
import invoiceRoutes from './routes/invoiceRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import notificationRoutes from './routes/notificationRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'MSME Smart Dashboard API',
    database: isConnectedToMongoDB ? 'MongoDB (Connected)' : 'In-Memory Fallback (MongoDB Disconnected)',
  });
});

// Mount Routes
app.use('/api/customers', customerRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);

// 404 Fallback
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start Express server immediately so requests are accepted without connection refusal
const server = app.listen(PORT, () => {
  console.log(`🚀 MSME Backend Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB asynchronously in the background
connectDB().catch((err) => {
  console.error('Database connection error:', err);
});

process.on('SIGTERM', () => {
  if (server) server.close();
});
process.on('SIGINT', () => {
  if (server) server.close();
});

export default app;
