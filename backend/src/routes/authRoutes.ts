import { Router, Request, Response } from 'express';
import { UserAccountModel } from '../models/UserAccount';
import { userAccounts, UserAccount } from '../data/store';
import { isConnectedToMongoDB } from '../config/db';

const router = Router();

// Role-based permissions mapping
export const ROLE_PERMISSIONS: Record<string, string[]> = {
  Administrator: [
    'Admin', 'Dashboard', 'Inventory', 'Add Product', 'Sales', 'New Sale', 'Purchases', 'New Purchase', 'Customers', 'New Customer',
    'Suppliers', 'New Supplier', 'Invoices', 'Create Invoice', 'GST', 'Reports',
    'Business Intelligence', 'Predictions', 'Recommendations', 'Settings', 'Logout'
  ],
  'Sales Manager': [
    'Dashboard', 'Sales', 'New Sale', 'Customers', 'New Customer', 'Invoices', 'Create Invoice',
    'GST', 'Reports', 'Business Intelligence', 'Logout'
  ],
  'Purchase Manager': [
    'Dashboard', 'Purchases', 'New Purchase', 'Suppliers', 'New Supplier', 'Inventory', 'Add Product', 'Reports', 'Logout'
  ],
  'Inventory Staff': [
    'Dashboard', 'Inventory', 'Add Product', 'Reports', 'Logout'
  ],
  'Sales Staff': [
    'Dashboard', 'Sales', 'New Sale', 'Customers', 'New Customer', 'Invoices', 'Create Invoice', 'Logout'
  ],
  'View Only': [
    'Dashboard', 'Reports', 'Logout'
  ],
};

// GET all staff profiles for quick login selector
router.get('/staff-profiles', async (_req: Request, res: Response) => {
  try {
    if (isConnectedToMongoDB) {
      const dbUsers = await UserAccountModel.find().sort({ id: 1 });
      const staff = dbUsers.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        status: u.status,
        joinedOn: u.joinedOn,
        allowedPages: (u.allowedPages && u.allowedPages.length > 0)
          ? u.allowedPages
          : (ROLE_PERMISSIONS[u.role] || ['Dashboard', 'Logout']),
      }));
      return res.json({ success: true, data: staff });
    }
  } catch (err) {
    console.error('MongoDB error, falling back:', err);
  }

  const staff = userAccounts.map(({ id, name, email, role, status, joinedOn, allowedPages }) => ({
    id,
    name,
    email,
    role,
    status,
    joinedOn,
    allowedPages: (allowedPages && allowedPages.length > 0)
      ? allowedPages
      : (ROLE_PERMISSIONS[role] || ['Dashboard', 'Logout']),
  }));
  res.json({ success: true, data: staff });
});

// POST login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both email and password.'
    });
  }

  const cleanEmail = email.toLowerCase().trim();
  let user: {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    joinedOn: string;
    allowedPages?: string[];
    password?: string;
  } | null = null;

  try {
    if (isConnectedToMongoDB) {
      const dbUser = await UserAccountModel.findOne({ email: cleanEmail });
      if (dbUser) {
        user = {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          role: dbUser.role,
          status: dbUser.status,
          joinedOn: dbUser.joinedOn,
          allowedPages: dbUser.allowedPages,
          password: (dbUser as any).password,
        };
      }
    }
  } catch (err) {
    console.error('MongoDB login error, falling back:', err);
  }

  if (!user) {
    user = userAccounts.find(
      (u) => u.email.toLowerCase().trim() === cleanEmail
    ) || null;
  }

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email address. Staff profile not found.'
    });
  }

  if (user.status === 'Inactive') {
    return res.status(403).json({
      success: false,
      message: `Account for ${user.name} (${user.role}) is currently Inactive. Contact Administrator to activate.`
    });
  }

  // Password verification: accept custom password, default password "msme123" or role shortcuts
  const userCustomPassword = (user as any).password;
  const validPasswords = ['msme123', 'password123', 'admin123', '123456'];
  const isValidPassword =
    (userCustomPassword && password === userCustomPassword) ||
    password === 'msme123' ||
    validPasswords.includes(password.toLowerCase()) ||
    password.toLowerCase() === user.role.toLowerCase().replace(/\s+/g, '') + '123';

  if (!isValidPassword) {
    return res.status(401).json({
      success: false,
      message: 'Invalid password. (Hint: Use default password "msme123")'
    });
  }

  let allowedPages = (user.allowedPages && user.allowedPages.length > 0)
    ? [...user.allowedPages]
    : (ROLE_PERMISSIONS[user.role] || ['Dashboard', 'Logout']);

  if (user.role === 'Administrator' && !allowedPages.includes('Admin')) {
    allowedPages = ['Admin', ...allowedPages];
  }

  res.json({
    success: true,
    message: `Welcome back, ${user.name}!`,
    token: `msme_jwt_${user.id}_${Date.now()}`,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      joinedOn: user.joinedOn,
      allowedPages,
    }
  });
});

// POST forgot password (with recovery key / verification PIN)
router.post('/forgot-password', async (req: Request, res: Response) => {
  const { email, recoveryKey, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both email address and new password.'
    });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'New password must be at least 6 characters long.'
    });
  }

  const cleanEmail = email.toLowerCase().trim();
  const validRecoveryKeys = ['MSME2026', '123456', 'admin-reset', 'msme123', 'ADMIN123'];
  const isValidKey = !recoveryKey || validRecoveryKeys.includes(recoveryKey) || recoveryKey.toUpperCase() === 'MSME2026';

  if (!isValidKey) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Master Recovery Key. Use default verification key "MSME2026" or "123456".'
    });
  }

  try {
    if (isConnectedToMongoDB) {
      await UserAccountModel.findOneAndUpdate({ email: cleanEmail }, { $set: { password: newPassword } });
    }
  } catch (err) {
    console.error('MongoDB forgot password update error:', err);
  }

  const memUser = userAccounts.find(u => u.email.toLowerCase().trim() === cleanEmail);
  if (memUser) {
    (memUser as any).password = newPassword;
  }

  res.json({
    success: true,
    message: `Password for ${cleanEmail} has been reset successfully. You can now log in with your new password.`
  });
});

// POST admin change user password
router.post('/admin-change-password', async (req: Request, res: Response) => {
  const { userId, email, newPassword } = req.body;

  if (!newPassword || (!userId && !email)) {
    return res.status(400).json({
      success: false,
      message: 'Target user ID/email and new password are required.'
    });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'New password must be at least 6 characters long.'
    });
  }

  const cleanEmail = email ? email.toLowerCase().trim() : '';

  try {
    if (isConnectedToMongoDB) {
      if (userId) {
        await UserAccountModel.findOneAndUpdate({ id: Number(userId) }, { $set: { password: newPassword } });
      } else if (cleanEmail) {
        await UserAccountModel.findOneAndUpdate({ email: cleanEmail }, { $set: { password: newPassword } });
      }
    }
  } catch (err) {
    console.error('MongoDB admin change password error:', err);
  }

  const memUser = userAccounts.find(u => (userId && u.id === Number(userId)) || (cleanEmail && u.email.toLowerCase().trim() === cleanEmail));
  if (memUser) {
    (memUser as any).password = newPassword;
  }

  res.json({
    success: true,
    message: `Password for ${memUser ? memUser.name : cleanEmail} updated successfully by Administrator.`
  });
});

export default router;
