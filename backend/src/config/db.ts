import mongoose from 'mongoose';
import { CustomerModel } from '../models/Customer';
import { SupplierModel } from '../models/Supplier';
import { ProductModel } from '../models/Product';
import { SaleOrderModel } from '../models/SaleOrder';
import { PurchaseOrderModel } from '../models/PurchaseOrder';
import { InvoiceModel } from '../models/Invoice';
import { UserAccountModel } from '../models/UserAccount';
import { NotificationModel } from '../models/Notification';
import {
  customers as seedCustomers,
  suppliers as seedSuppliers,
  products as seedProducts,
  sales as seedSales,
  purchases as seedPurchases,
  invoices as seedInvoices,
  userAccounts as seedUsers,
  notifications as seedNotifications,
} from '../data/store';

export let isConnectedToMongoDB = false;

export async function connectDB(): Promise<void> {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/msme_smart';

  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
    });
    isConnectedToMongoDB = true;
    console.log(`🍃 MongoDB Connected Successfully: ${mongoose.connection.host}/${mongoose.connection.name}`);

    // Auto-seed initial datasets if collections are empty
    await seedDatabaseIfEmpty();
  } catch (err: unknown) {
    isConnectedToMongoDB = false;
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`⚠️  MongoDB Connection Warning: ${msg}`);
    console.warn(`👉 Running in fallback in-memory mode until MongoDB is connected.`);
    console.warn(`👉 To connect MongoDB Atlas: set MONGODB_URI in backend/.env`);
    console.warn(`👉 Or start local MongoDB: net start MongoDB (or mongod)`);
  }
}

async function seedDatabaseIfEmpty() {
  try {
    const [custCount, suppCount, prodCount, saleCount, purCount, invCount, userCount, notifCount] = await Promise.all([
      CustomerModel.countDocuments(),
      SupplierModel.countDocuments(),
      ProductModel.countDocuments(),
      SaleOrderModel.countDocuments(),
      PurchaseOrderModel.countDocuments(),
      InvoiceModel.countDocuments(),
      UserAccountModel.countDocuments(),
      NotificationModel.countDocuments(),
    ]);

    const tasks: Promise<any>[] = [];
    if (custCount === 0) tasks.push(CustomerModel.insertMany(seedCustomers));
    if (suppCount === 0) tasks.push(SupplierModel.insertMany(seedSuppliers));
    if (prodCount === 0) tasks.push(ProductModel.insertMany(seedProducts));
    if (saleCount === 0) tasks.push(SaleOrderModel.insertMany(seedSales));
    if (purCount === 0) tasks.push(PurchaseOrderModel.insertMany(seedPurchases));
    if (invCount === 0) tasks.push(InvoiceModel.insertMany(seedInvoices));
    if (userCount === 0) tasks.push(UserAccountModel.insertMany(seedUsers));
    if (notifCount === 0) tasks.push(NotificationModel.insertMany(seedNotifications));

    if (tasks.length > 0) {
      console.log(`🌱 Seeding missing collections into MongoDB (${tasks.length} collection tasks)...`);
      await Promise.all(tasks);
      console.log('✅ MongoDB auto-seeding completed!');
    }
  } catch (err) {
    console.error('Failed to seed MongoDB:', err);
  }
}
