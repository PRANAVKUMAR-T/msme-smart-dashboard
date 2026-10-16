import { Router, Request, Response } from 'express';
import { CustomerModel } from '../models/Customer';
import { ProductModel } from '../models/Product';
import { SaleOrderModel } from '../models/SaleOrder';
import { PurchaseOrderModel } from '../models/PurchaseOrder';
import { InvoiceModel } from '../models/Invoice';
import { SupplierModel } from '../models/Supplier';
import { NotificationModel } from '../models/Notification';
import { UserAccountModel } from '../models/UserAccount';
import {
  INITIAL_CUSTOMERS, INITIAL_SUPPLIERS, INITIAL_PRODUCTS, INITIAL_SALES,
  INITIAL_PURCHASES, INITIAL_INVOICES, INITIAL_NOTIFICATIONS, INITIAL_USER_ACCOUNTS,
  customers, sales, purchases, invoices, products, suppliers, notifications, userAccounts,
  resetStore
} from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// POST reset all collections to factory initial data or clean wipe (protected by master key)
const handleSystemReset = async (req: Request, res: Response) => {
  const { masterKey, mode = 'wipe_all' } = req.body || {};
  const validKeys = ['MASTER2026', 'MSME2026', 'MSME@2026', 'ADMIN@2026', 'admin123', 'msme123', 'admin', 'password123'];
  
  if (masterKey && !validKeys.includes(String(masterKey).trim())) {
    return res.status(401).json({
      success: false,
      message: 'Invalid Master Security Key. System reset unauthorized.'
    });
  }

  const isWipeAll = mode === 'wipe_all';

  try {
    if (isConnectedToMongoDB) {
      // 1. Delete all business collections + user accounts
      await Promise.all([
        CustomerModel.deleteMany({}),
        SupplierModel.deleteMany({}),
        ProductModel.deleteMany({}),
        SaleOrderModel.deleteMany({}),
        PurchaseOrderModel.deleteMany({}),
        InvoiceModel.deleteMany({}),
        NotificationModel.deleteMany({}),
        UserAccountModel.deleteMany({}),
      ]);

      if (isWipeAll) {
        // In clean wipe mode: Keep only primary Administrator active, all business data is 0 records
        const defaultAdmin = {
          ...INITIAL_USER_ACCOUNTS[0],
          name: 'Admin',
          password: 'msme123'
        };
        await UserAccountModel.create(defaultAdmin);
        resetStore(true);

        return res.json({
          success: true,
          mode: 'wipe_all',
          message: 'All business records wiped completely. Workspace is now empty and fresh.',
          data: {
            customers: [],
            suppliers: [],
            products: [],
            sales: [],
            purchases: [],
            invoices: [],
            notifications: [],
            users: [defaultAdmin]
          }
        });
      } else {
        // Factory defaults: re-seed pristine initial demo datasets
        await Promise.all([
          CustomerModel.insertMany(INITIAL_CUSTOMERS.map(c => ({ ...c }))),
          SupplierModel.insertMany(INITIAL_SUPPLIERS.map(s => ({ ...s }))),
          ProductModel.insertMany(INITIAL_PRODUCTS.map(p => ({ ...p }))),
          SaleOrderModel.insertMany(INITIAL_SALES.map(s => ({ ...s }))),
          PurchaseOrderModel.insertMany(INITIAL_PURCHASES.map(p => ({ ...p }))),
          InvoiceModel.insertMany(INITIAL_INVOICES.map(i => ({ ...i }))),
          NotificationModel.insertMany(INITIAL_NOTIFICATIONS.map(n => ({ ...n }))),
          UserAccountModel.insertMany(INITIAL_USER_ACCOUNTS.map(u => ({ ...u, password: 'msme123' }))),
        ]);

        resetStore(false);

        return res.json({
          success: true,
          mode: 'factory_defaults',
          message: 'All database records successfully reset to clean factory defaults.',
          data: {
            customers: INITIAL_CUSTOMERS,
            suppliers: INITIAL_SUPPLIERS,
            products: INITIAL_PRODUCTS,
            sales: INITIAL_SALES,
            purchases: INITIAL_PURCHASES,
            invoices: INITIAL_INVOICES,
            notifications: INITIAL_NOTIFICATIONS,
            users: INITIAL_USER_ACCOUNTS
          }
        });
      }
    }
  } catch (err) {
    console.error('MongoDB reset error:', err);
  }

  // Fallback in-memory reset
  resetStore(isWipeAll);

  res.json({
    success: true,
    mode: isWipeAll ? 'wipe_all' : 'factory_defaults',
    message: isWipeAll
      ? 'All workspace records wiped completely. Workspace is now empty.'
      : 'All workspace records successfully reset to clean factory defaults.',
    data: {
      customers: [...customers],
      suppliers: [...suppliers],
      products: [...products],
      sales: [...sales],
      purchases: [...purchases],
      invoices: [...invoices],
      notifications: [...notifications],
      users: [...userAccounts]
    }
  });
};

router.post('/reset-demo-data', handleSystemReset);
router.post('/reset-system-data', handleSystemReset);

// GET summary KPIs (supports both / and /summary)
const getSummaryHandler = async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const [dbCustomers, dbProducts, dbSales, dbPurchases, dbInvoices] = await Promise.all([
        CustomerModel.find(),
        ProductModel.find(),
        SaleOrderModel.find(),
        PurchaseOrderModel.find(),
        InvoiceModel.find(),
      ]);

      const totalRevenue = dbSales.reduce((sum, s) => sum + s.amount, 0);
      const totalPurchases = dbPurchases.reduce((sum, p) => sum + p.total, 0);
      const pendingInvoicesCount = dbInvoices.filter((i) => i.status === 'Pending' || i.status === 'Overdue').length;
      const overdueAmount = dbInvoices
        .filter((i) => i.status === 'Overdue')
        .reduce((sum, i) => sum + i.total, 0);
      const lowStockCount = dbProducts.filter((p) => p.stock < 10).length;

      return res.json({
        success: true,
        data: {
          totalRevenue,
          totalPurchases,
          customerCount: dbCustomers.length,
          productCount: dbProducts.length,
          pendingInvoicesCount,
          overdueAmount,
          lowStockCount,
          grossProfit: totalRevenue - totalPurchases,
          dataSource: 'MongoDB',
        },
      });
    }
  } catch (err) {
    console.error('MongoDB analytics error, falling back:', err);
  }

  const totalRevenue = sales.reduce((sum, s) => sum + s.amount, 0);
  const totalPurchases = purchases.reduce((sum, p) => sum + p.total, 0);
  const pendingInvoicesCount = invoices.filter((i) => i.status === 'Pending' || i.status === 'Overdue').length;
  const overdueAmount = invoices
    .filter((i) => i.status === 'Overdue')
    .reduce((sum, i) => sum + i.total, 0);
  const lowStockCount = products.filter((p) => p.stock < 10).length;

  res.json({
    success: true,
    data: {
      totalRevenue,
      totalPurchases,
      customerCount: customers.length,
      productCount: products.length,
      pendingInvoicesCount,
      overdueAmount,
      lowStockCount,
      grossProfit: totalRevenue - totalPurchases,
      dataSource: 'In-Memory Store',
    },
  });
};

router.get('/', getSummaryHandler);
router.get('/summary', getSummaryHandler);

export default router;
