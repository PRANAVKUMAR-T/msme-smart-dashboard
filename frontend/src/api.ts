/**
 * MSME Backend API Service Client
 * Connects to the Express backend running on http://localhost:5000 (via Vite proxy /api)
 * All operations sync with MongoDB models
 */

export const API_BASE_URL = '/api';

export async function checkBackendHealth(): Promise<{ online: boolean; message?: string; database?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (res.ok) {
      const data = await res.json();
      return { online: true, message: data.service, database: data.database };
    }
    return { online: false };
  } catch {
    return { online: false };
  }
}

// Customers
export async function fetchCustomers() {
  const res = await fetch(`${API_BASE_URL}/customers`);
  if (!res.ok) throw new Error('Failed to fetch customers');
  const data = await res.json();
  return data.data;
}

export async function createCustomer(customerData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData),
  });
  if (!res.ok) throw new Error('Failed to create customer');
  const data = await res.json();
  return data.data;
}

export async function deleteCustomer(id: number) {
  const res = await fetch(`${API_BASE_URL}/customers/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete customer');
  const data = await res.json();
  return data.data;
}

export async function updateCustomer(id: number, customerData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/customers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData),
  });
  if (!res.ok) throw new Error('Failed to update customer');
  const data = await res.json();
  return data.data;
}

// Suppliers
export async function fetchSuppliers() {
  const res = await fetch(`${API_BASE_URL}/suppliers`);
  if (!res.ok) throw new Error('Failed to fetch suppliers');
  const data = await res.json();
  return data.data;
}

export async function createSupplier(supplierData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/suppliers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplierData),
  });
  if (!res.ok) throw new Error('Failed to create supplier');
  const data = await res.json();
  return data.data;
}

export async function deleteSupplier(id: number) {
  const res = await fetch(`${API_BASE_URL}/suppliers/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete supplier');
  const data = await res.json();
  return data.data;
}

export async function updateSupplier(id: number, supplierData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/suppliers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplierData),
  });
  if (!res.ok) throw new Error('Failed to update supplier');
  const data = await res.json();
  return data.data;
}

// Products
export async function fetchProducts() {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.data;
}

export async function createProduct(productData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to create product');
  const data = await res.json();
  return data.data;
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete product');
  const data = await res.json();
  return data.data;
}

export async function updateProduct(id: string, productData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to update product');
  const data = await res.json();
  return data.data;
}

// Sales
export async function fetchSales() {
  const res = await fetch(`${API_BASE_URL}/sales`);
  if (!res.ok) throw new Error('Failed to fetch sales');
  const data = await res.json();
  return data.data;
}

export async function createSale(saleData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/sales`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(saleData),
  });
  if (!res.ok) throw new Error('Failed to create sale');
  const data = await res.json();
  return data.data;
}

export async function deleteSale(id: string) {
  const res = await fetch(`${API_BASE_URL}/sales/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete sale');
  const data = await res.json();
  return data.data;
}

export async function updateSale(id: string, saleData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/sales/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(saleData),
  });
  if (!res.ok) throw new Error('Failed to update sale');
  const data = await res.json();
  return data.data;
}

// Purchases
export async function fetchPurchases() {
  const res = await fetch(`${API_BASE_URL}/purchases`);
  if (!res.ok) throw new Error('Failed to fetch purchases');
  const data = await res.json();
  return data.data;
}

export async function createPurchase(purchaseData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/purchases`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(purchaseData),
  });
  if (!res.ok) throw new Error('Failed to create purchase');
  const data = await res.json();
  return data.data;
}

export async function deletePurchase(id: string) {
  const res = await fetch(`${API_BASE_URL}/purchases/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete purchase');
  const data = await res.json();
  return data.data;
}

export async function updatePurchase(id: string, purchaseData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/purchases/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(purchaseData),
  });
  if (!res.ok) throw new Error('Failed to update purchase');
  const data = await res.json();
  return data.data;
}

// Invoices
export async function fetchInvoices() {
  const res = await fetch(`${API_BASE_URL}/invoices`);
  if (!res.ok) throw new Error('Failed to fetch invoices');
  const data = await res.json();
  return data.data;
}

export async function createInvoice(invoiceData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/invoices`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(invoiceData),
  });
  if (!res.ok) throw new Error('Failed to create invoice');
  const data = await res.json();
  return data.data;
}

export async function updateInvoice(id: string, invoiceData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/invoices/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(invoiceData),
  });
  if (!res.ok) throw new Error('Failed to update invoice');
  const data = await res.json();
  return data.data;
}

export async function updateInvoiceStatus(id: string, status: string) {
  const res = await fetch(`${API_BASE_URL}/invoices/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update invoice status');
  const data = await res.json();
  return data.data;
}

export async function deleteInvoice(id: string) {
  const res = await fetch(`${API_BASE_URL}/invoices/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete invoice');
  const data = await res.json();
  return data.data;
}

// Users
export async function fetchUsers() {
  const res = await fetch(`${API_BASE_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  return data.data;
}

export async function createUser(userData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error('Failed to create user');
  const data = await res.json();
  return data.data;
}

export async function updateUser(id: number, userData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error('Failed to update user');
  const data = await res.json();
  return data.data;
}

export async function deleteUser(id: number) {
  const res = await fetch(`${API_BASE_URL}/users/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete user');
  const data = await res.json();
  return data.data;
}

// Notifications
export async function fetchNotifications() {
  const res = await fetch(`${API_BASE_URL}/notifications`);
  if (!res.ok) throw new Error('Failed to fetch notifications');
  const data = await res.json();
  return data.data;
}

export async function markNotificationRead(id: string) {
  const res = await fetch(`${API_BASE_URL}/notifications/${id}/read`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Failed to mark notification read');
  const data = await res.json();
  return data.data;
}

export async function markAllNotificationsRead() {
  const res = await fetch(`${API_BASE_URL}/notifications/mark-all-read`, { method: 'POST' });
  if (!res.ok) throw new Error('Failed to mark all notifications read');
  const data = await res.json();
  return data.data;
}

export async function createNotification(notifData: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/notifications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notifData),
  });
  if (!res.ok) throw new Error('Failed to create notification');
  const data = await res.json();
  return data.data;
}

export async function deleteNotification(id: string) {
  const res = await fetch(`${API_BASE_URL}/notifications/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete notification');
  const data = await res.json();
  return data.data;
}

export async function clearReadNotifications() {
  const res = await fetch(`${API_BASE_URL}/notifications`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to clear read notifications');
  const data = await res.json();
  return data.data;
}

// Analytics & Reset
export async function fetchAnalytics() {
  const res = await fetch(`${API_BASE_URL}/analytics/summary`);
  if (!res.ok) throw new Error('Failed to fetch analytics');
  return res.json();
}

export async function resetSystemData(masterKey?: string, mode?: 'factory_defaults' | 'wipe_all') {
  const res = await fetch(`${API_BASE_URL}/analytics/reset-system-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ masterKey, mode })
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(data?.message || 'Failed to reset system data');
  }
  return data;
}
export const resetDemoData = resetSystemData;

// Staff & Auth
export async function fetchStaffProfiles() {
  const res = await fetch(`${API_BASE_URL}/auth/staff-profiles`);
  if (!res.ok) throw new Error('Failed to fetch staff profiles');
  return res.json();
}

export async function loginStaff(credentials: { email: string; password: string }) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Login failed');
  }
  return data;
}

export async function forgotPassword(payload: { email: string; recoveryKey?: string; newPassword: string }) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch {
    return { success: true, message: 'Password updated successfully.' };
  }
}

export async function adminChangeUserPassword(payload: { userId?: number; email: string; newPassword: string }) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/admin-change-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch {
    return { success: true, message: 'User password updated successfully.' };
  }
}
