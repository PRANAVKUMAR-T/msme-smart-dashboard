export interface Customer {
  id: number;
  shop: string;
  contact: string;
  phone: string;
  email: string;
  location: string;
  gstin: string;
  category: string;
  limit: number;
  balance: number;
}

export interface Supplier {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  location: string;
  category: string;
  rating: number;
}

export interface SaleOrder {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending';
}

export interface PurchaseOrder {
  id: string;
  supplier: string;
  product: string;
  quantity: number;
  price: number;
  gst: number;
  total: number;
  date: string;
}

export interface InvoiceItem {
  id: string;
  customer: string;
  date: string;
  dueDate: string;
  amount: number;
  gst: number;
  total: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  category: string;
}

export interface UserAccount {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinedOn: string;
  allowedPages?: string[];
  password?: string;
}

export interface NotificationItem {
  id: string;
  category: 'Inventory' | 'Sales' | 'Purchases' | 'System';
  title: string;
  message: string;
  time: string;
  read: boolean;
  severity: 'critical' | 'warning' | 'success' | 'purple' | 'info';
  linkPage?: string;
}

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: 1, shop: 'Sree Lakshmi Rewinding Works', contact: 'Suresh Kumar', phone: '98765 42109', email: 'accounts@lakshmirewinding.in', location: 'Kaloor, Kerala', gstin: '32AABCS4821F1Z8', category: 'Copper winding wire', limit: 50000, balance: 28500 },
  { id: 2, shop: 'Greenfield Agri Pumps', contact: 'Anand Prasad', phone: '98470 31986', email: 'orders@greenfieldpumps.in', location: 'Aluva, Kerala', gstin: '32BDEPA8912L1Z4', category: 'Submersible pumps', limit: 40000, balance: 4200 },
  { id: 3, shop: 'Metro Industrial Electricals', contact: 'Faisal Mohammed', phone: '98954 27641', email: 'purchase@metroindustrial.in', location: 'Kochi, Kerala', gstin: '32AAHFM7710C1Z6', category: '3-phase motors', limit: 75000, balance: 12500 },
  { id: 4, shop: 'ABC Industries', contact: 'Manoj Pillai', phone: '98765 43210', email: 'abc@industries.com', location: 'Coimbatore, TN', gstin: '33AAAAA0000A1Z5', category: 'Manufacturing Unit', limit: 100000, balance: 0 },
  { id: 5, shop: 'Shree Motors', contact: 'Karthik Raja', phone: '87654 32109', email: 'shree@motors.com', location: 'Chennai, TN', gstin: '33BEEPA1234F1Z2', category: 'Auto Parts Dealer', limit: 30000, balance: 15000 },
  { id: 6, shop: 'Kumar Engineering', contact: 'Praveen Kumar', phone: '91234 56789', email: 'kumar.engg@gmail.com', location: 'Tirupur, TN', gstin: '33CCCDE5678G1Z9', category: 'Engineering Works', limit: 60000, balance: 0 },
  { id: 7, shop: 'Velan Enterprises', contact: 'Senthil Velan', phone: '99887 76655', email: 'velan@enterprises.com', location: 'Madurai, TN', gstin: '33DDDEF9012H1Z3', category: 'Industrial Supplies', limit: 50000, balance: 8500 }
];

export const INITIAL_SUPPLIERS: Supplier[] = [
  { id: 1, name: 'ABC Electrical Traders', contact: 'Rajesh Sharma', phone: '98450 11223', email: 'sales@abctraders.com', location: 'Coimbatore, TN', category: 'Electric motors', rating: 4.8 },
  { id: 2, name: 'Southern Winding Wires Ltd', contact: 'Venkatesh R', phone: '98941 33445', email: 'orders@southernwires.in', location: 'Madurai, TN', category: 'Copper winding wire', rating: 4.6 },
  { id: 3, name: 'Apex Motor Spares & Components', contact: 'Kiran Dev', phone: '97442 55667', email: 'support@apexspares.in', location: 'Ernakulam, KL', category: 'Motor spare parts', rating: 4.9 },
  { id: 4, name: 'Global Parts Co', contact: 'Deepak V', phone: '87654 32109', email: 'sales@globalparts.com', location: 'Chennai, TN', category: 'Industrial Supplies', rating: 4.7 },
  { id: 5, name: 'Speed Supply & Logistics', contact: 'Vijay Anand', phone: '91234 56789', email: 'info@speedsupply.com', location: 'Bangalore, KA', category: 'Auto Components', rating: 4.5 },
  { id: 6, name: 'Tech Solutions Hardware', contact: 'Siddharth M', phone: '99887 76655', email: 'contact@techsol.com', location: 'Madurai, TN', category: 'Industrial Hardware', rating: 4.4 },
  { id: 7, name: 'Reliable Motors & Gearboxes', contact: 'Gopal Swamy', phone: '93456 77890', email: 'reliable@motors.com', location: 'Salem, TN', category: 'Motor Supplier', rating: 4.8 }
];

export const INITIAL_SALES: SaleOrder[] = [
  { id: 'INV001', customer: 'ABC Industries', product: '3HP Motor (2)', quantity: 2, amount: 20000, date: '08 Sep 2026', status: 'Paid' },
  { id: 'INV002', customer: 'Shree Motors', product: '2HP Motor (1)', quantity: 1, amount: 15000, date: '06 Sep 2026', status: 'Paid' },
  { id: 'INV003', customer: 'Kumar Engineering', product: '1HP Motor (3)', quantity: 3, amount: 12000, date: '04 Sep 2026', status: 'Pending' },
  { id: 'INV004', customer: 'Velan Enterprises', product: '2HP Motor (1)', quantity: 1, amount: 7500, date: '02 Sep 2026', status: 'Paid' },
  { id: 'INV005', customer: 'Sree Lakshmi Rewinding Works', product: 'Copper Wire 1.0mm (10kg)', quantity: 5, amount: 28500, date: '31 Aug 2026', status: 'Pending' },
  { id: 'INV006', customer: 'Greenfield Agri Pumps', product: 'Submersible Pump 2HP', quantity: 2, amount: 15000, date: '28 Aug 2026', status: 'Paid' },
  { id: 'INV007', customer: 'Metro Industrial Electricals', product: '3HP Motor (1)', quantity: 1, amount: 10000, date: '25 Aug 2026', status: 'Pending' }
];

export const INITIAL_PURCHASES: PurchaseOrder[] = [
  { id: 'PUR001', supplier: 'ABC Electrical Traders', product: '3HP Motor', quantity: 10, price: 8000, gst: 18, total: 94400, date: '28 Aug 2026' },
  { id: 'PUR002', supplier: 'Southern Winding Wires Ltd', product: 'Copper Wire 1.0mm', quantity: 20, price: 4500, gst: 18, total: 106200, date: '26 Aug 2026' },
  { id: 'PUR003', supplier: 'Apex Motor Spares & Components', product: 'Capacitors 50uF', quantity: 50, price: 250, gst: 12, total: 14000, date: '20 Aug 2026' },
  { id: 'PUR004', supplier: 'Global Parts Co', product: '2HP Motor', quantity: 20, price: 6500, gst: 18, total: 153400, date: '18 Aug 2026' },
  { id: 'PUR005', supplier: 'Speed Supply & Logistics', product: '1HP Motor', quantity: 15, price: 4000, gst: 12, total: 67200, date: '15 Aug 2026' },
  { id: 'PUR006', supplier: 'Tech Solutions Hardware', product: 'Coupling', quantity: 50, price: 300, gst: 18, total: 17700, date: '10 Aug 2026' },
  { id: 'PUR007', supplier: 'Reliable Motors & Gearboxes', product: 'Bearing', quantity: 30, price: 600, gst: 18, total: 21240, date: '05 Aug 2026' }
];

export const INITIAL_INVOICES: InvoiceItem[] = [
  { id: 'INV001', customer: 'ABC Industries', date: '08 Sep 2026', dueDate: '22 Sep 2026', amount: 20000, gst: 3600, total: 23600, status: 'Paid' },
  { id: 'INV002', customer: 'Shree Motors', date: '06 Sep 2026', dueDate: '20 Sep 2026', amount: 15000, gst: 2700, total: 17700, status: 'Paid' },
  { id: 'INV003', customer: 'Kumar Engineering', date: '04 Sep 2026', dueDate: '18 Sep 2026', amount: 12000, gst: 2160, total: 14160, status: 'Pending' },
  { id: 'INV004', customer: 'Velan Enterprises', date: '02 Sep 2026', dueDate: '16 Sep 2026', amount: 7500, gst: 1350, total: 8850, status: 'Paid' },
  { id: 'INV005', customer: 'Sree Lakshmi Rewinding Works', date: '30 Aug 2026', dueDate: '13 Sep 2026', amount: 28500, gst: 5130, total: 33630, status: 'Overdue' },
  { id: 'INV006', customer: 'Greenfield Agri Pumps', date: '25 Aug 2026', dueDate: '08 Sep 2026', amount: 4200, gst: 756, total: 4956, status: 'Paid' },
  { id: 'INV007', customer: 'Metro Industrial Electricals', date: '20 Aug 2026', dueDate: '03 Sep 2026', amount: 12500, gst: 2250, total: 14750, status: 'Overdue' }
];

export const INITIAL_PRODUCTS: Product[] = [
  { id: 'P001', name: '1HP Electric Motor', stock: 45, price: 5000, category: 'Electric Motor' },
  { id: 'P002', name: '2HP Submersible Pump', stock: 18, price: 7500, category: 'Pump' },
  { id: 'P003', name: '3HP Heavy Duty Motor', stock: 4, price: 10000, category: 'Electric Motor' },
  { id: 'P004', name: 'Copper Winding Wire (1.0mm)', stock: 12, price: 550, category: 'Raw Material' },
  { id: 'P005', name: 'Industrial Coupling', stock: 35, price: 450, category: 'Spare Parts' },
  { id: 'P006', name: 'Heavy Duty Bearing (6204)', stock: 2, price: 280, category: 'Spare Parts' },
  { id: 'P007', name: 'Capacitor 50uF', stock: 60, price: 150, category: 'Electricals' },
  { id: 'P008', name: 'Dol Starter 5HP', stock: 15, price: 1800, category: 'Control Panel' }
];

export const INITIAL_USER_ACCOUNTS: UserAccount[] = [
  { id: 1, name: 'Admin', email: 'admin@msmesmart.com', role: 'Administrator', status: 'Active', joinedOn: '10 Jan 2026', password: 'msme123' },
  { id: 2, name: 'Ravi Kumar', email: 'ravi@msmesmart.com', role: 'Sales Manager', status: 'Active', joinedOn: '15 Feb 2026', password: 'msme123' },
  { id: 3, name: 'Priya Sharma', email: 'priya@msmesmart.com', role: 'Purchase Manager', status: 'Active', joinedOn: '20 Mar 2026', password: 'msme123' },
  { id: 4, name: 'Arun Das', email: 'arun@msmesmart.com', role: 'Inventory Staff', status: 'Inactive', joinedOn: '12 Apr 2026', password: 'msme123' },
  { id: 5, name: 'Meena R', email: 'meena@msmesmart.com', role: 'Sales Staff', status: 'Active', joinedOn: '18 May 2026', password: 'msme123' }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    category: 'Inventory',
    title: 'Low Stock Alert',
    message: '3HP Motor has only 2 units left in stock.',
    time: '10 minutes ago',
    read: false,
    severity: 'critical',
    linkPage: 'Inventory'
  },
  {
    id: 'notif-2',
    category: 'Inventory',
    title: 'Stock Running Low',
    message: '2HP Motor stock is running low (10 units).',
    time: '1 hour ago',
    read: false,
    severity: 'warning',
    linkPage: 'Inventory'
  },
  {
    id: 'notif-3',
    category: 'Sales',
    title: 'New Sale Added',
    message: 'Invoice INV006 for ₹18,000 has been created.',
    time: '3 hours ago',
    read: false,
    severity: 'success',
    linkPage: 'Sales'
  },
  {
    id: 'notif-4',
    category: 'Purchases',
    title: 'New Purchase Order',
    message: 'PO PUR008 from ABC Traders has been added.',
    time: '5 hours ago',
    read: false,
    severity: 'purple',
    linkPage: 'Purchases'
  },
  {
    id: 'notif-5',
    category: 'System',
    title: 'System Update',
    message: 'Application has been updated to v1.0.1.',
    time: '1 day ago',
    read: false,
    severity: 'info',
    linkPage: 'Settings'
  }
];

// Active in-memory arrays (initialized as clones of initial datasets)
export const customers: Customer[] = INITIAL_CUSTOMERS.map(c => ({ ...c }));
export const suppliers: Supplier[] = INITIAL_SUPPLIERS.map(s => ({ ...s }));
export const sales: SaleOrder[] = INITIAL_SALES.map(s => ({ ...s }));
export const purchases: PurchaseOrder[] = INITIAL_PURCHASES.map(p => ({ ...p }));
export const invoices: InvoiceItem[] = INITIAL_INVOICES.map(i => ({ ...i }));
export const products: Product[] = INITIAL_PRODUCTS.map(p => ({ ...p }));
export const userAccounts: UserAccount[] = INITIAL_USER_ACCOUNTS.map(u => ({ ...u }));
export const notifications: NotificationItem[] = INITIAL_NOTIFICATIONS.map(n => ({ ...n }));

export function resetStore(wipeAll: boolean = false) {
  customers.length = 0;
  suppliers.length = 0;
  sales.length = 0;
  purchases.length = 0;
  invoices.length = 0;
  products.length = 0;
  notifications.length = 0;

  if (wipeAll) {
    userAccounts.length = 0;
    userAccounts.push({ ...INITIAL_USER_ACCOUNTS[0] });
  } else {
    customers.push(...INITIAL_CUSTOMERS.map(c => ({ ...c })));
    suppliers.push(...INITIAL_SUPPLIERS.map(s => ({ ...s })));
    sales.push(...INITIAL_SALES.map(s => ({ ...s })));
    purchases.push(...INITIAL_PURCHASES.map(p => ({ ...p })));
    invoices.push(...INITIAL_INVOICES.map(i => ({ ...i })));
    products.push(...INITIAL_PRODUCTS.map(p => ({ ...p })));
    notifications.push(...INITIAL_NOTIFICATIONS.map(n => ({ ...n })));
    userAccounts.length = 0;
    userAccounts.push(...INITIAL_USER_ACCOUNTS.map(u => ({ ...u })));
  }
}

