/**
 * MSME Smart Workspace - Full Stack Automated Test Suite
 * Tests all Express REST API endpoints and verifies MongoDB synchronization
 */

const http = require('http');

const BASE_URL = 'http://localhost:5000';

function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        let json = null;
        try {
          json = JSON.parse(data);
        } catch {
          json = data;
        }
        resolve({ status: res.statusCode, data: json });
      });
    });

    req.on('error', (err) => reject(err));

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

async function test(name, fn) {
  totalTests++;
  process.stdout.write(`  • [TEST ${totalTests}] ${name}... `);
  try {
    await fn();
    passedTests++;
    console.log(`\x1b[32mPASSED\x1b[0m`);
  } catch (err) {
    failedTests++;
    console.log(`\x1b[31mFAILED\x1b[0m`);
    console.error(`    ↳ Error:`, err.message || err);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

async function runAllTests() {
  console.log(`\n======================================================`);
  console.log(`  MSME SMART WORKSPACE - FULL-STACK TEST RUNNER`);
  console.log(`  Target: ${BASE_URL}`);
  console.log(`======================================================\n`);

  // 1. Health Check
  await test('Health check endpoint returns online status', async () => {
    const res = await request('GET', '/api/health');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.status === 'online', `Expected status online, got ${res.data.status}`);
  });

  // 2. Customers
  let testCustomerId = Date.now();
  await test('Fetch customer records list', async () => {
    const res = await request('GET', '/api/customers');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(Array.isArray(res.data.data), 'Expected data to be an array');
    assert(res.data.data.length > 0, 'Expected at least 1 customer');
  });

  await test('Create a new customer with opening balance', async () => {
    const res = await request('POST', '/api/customers', {
      id: testCustomerId,
      shop: 'Automated Test Works',
      contact: 'Test Engineer',
      phone: '99999 88888',
      email: 'test@msmesmart.com',
      location: 'Kochi, Kerala',
      gstin: '32TEST0000A1Z5',
      category: 'Testing Motors',
      limit: 50000,
      balance: 1000
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
    assert(res.data.data.shop === 'Automated Test Works', 'Shop name mismatch');
    assert(res.data.data.balance === 1000, `Expected balance 1000, got ${res.data.data.balance}`);
    if (res.data?.data?.id) {
      testCustomerId = res.data.data.id;
    }
  });

  await test('Fetch single customer by ID', async () => {
    const res = await request('GET', `/api/customers/${testCustomerId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.shop === 'Automated Test Works', 'Customer shop name mismatch');
  });

  await test('Update existing customer', async () => {
    const res = await request('PUT', `/api/customers/${testCustomerId}`, {
      balance: 2500
    });
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Delete test customer', async () => {
    const res = await request('DELETE', `/api/customers/${testCustomerId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 3. Products
  const testProdId = `TEST-P-${Date.now()}`;
  await test('Fetch product inventory', async () => {
    const res = await request('GET', '/api/products');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(Array.isArray(res.data.data), 'Expected array of products');
  });

  await test('Create new inventory product', async () => {
    const res = await request('POST', '/api/products', {
      id: testProdId,
      name: 'High Precision Capacitor 100uF',
      stock: 40,
      price: 320,
      category: 'Electricals',
      reorderLevel: 15
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
  });

  await test('Fetch single product by ID', async () => {
    const res = await request('GET', `/api/products/${testProdId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.name === 'High Precision Capacitor 100uF', 'Product name mismatch');
  });

  await test('Update product stock quantity', async () => {
    const res = await request('PUT', `/api/products/${testProdId}`, {
      stock: 55
    });
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Delete test product', async () => {
    const res = await request('DELETE', `/api/products/${testProdId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 4. Invoices
  const testInvId = `TEST-INV-${Date.now()}`;
  await test('Fetch all invoices', async () => {
    const res = await request('GET', '/api/invoices');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(Array.isArray(res.data.data), 'Expected invoice list');
  });

  await test('Create invoice and verify GST calculation', async () => {
    const res = await request('POST', '/api/invoices', {
      id: testInvId,
      customer: 'Greenfield Agri Pumps',
      date: '12 Oct 2026',
      dueDate: '26 Oct 2026',
      amount: 10000,
      gst: 1800,
      total: 11800,
      status: 'Pending'
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
    assert(res.data.data.total === 11800, `Expected total 11800, got ${res.data.data.total}`);
  });

  await test('Fetch single invoice by ID', async () => {
    const res = await request('GET', `/api/invoices/${testInvId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.customer === 'Greenfield Agri Pumps', 'Customer mismatch');
  });

  await test('Update invoice status to Paid', async () => {
    const res = await request('PATCH', `/api/invoices/${testInvId}/status`, {
      status: 'Paid'
    });
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Delete test invoice', async () => {
    const res = await request('DELETE', `/api/invoices/${testInvId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 5. Suppliers
  let testSupplierId = Date.now();
  await test('Fetch supplier vendor records', async () => {
    const res = await request('GET', '/api/suppliers');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.length > 0, 'Expected supplier records');
  });

  await test('Create a new supplier vendor', async () => {
    const res = await request('POST', '/api/suppliers', {
      id: testSupplierId,
      name: 'Delta Automation Supplies',
      contact: 'Arjun Menon',
      phone: '98450 99887',
      email: 'sales@deltaautomation.in',
      location: 'Thrissur, KL',
      category: 'Sensors & Controllers',
      rating: 4.9
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
    if (res.data?.data?.id) testSupplierId = res.data.data.id;
  });

  await test('Fetch single supplier by ID', async () => {
    const res = await request('GET', `/api/suppliers/${testSupplierId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.name === 'Delta Automation Supplies', 'Supplier name mismatch');
  });

  await test('Delete test supplier', async () => {
    const res = await request('DELETE', `/api/suppliers/${testSupplierId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 6. Sales & Purchases
  const testSaleId = `TEST-SALE-${Date.now()}`;
  await test('Fetch sales orders', async () => {
    const res = await request('GET', '/api/sales');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Create sales order', async () => {
    const res = await request('POST', '/api/sales', {
      id: testSaleId,
      customer: 'Greenfield Agri Pumps',
      product: 'Submersible Pump 2HP',
      quantity: 3,
      amount: 22500,
      status: 'Paid'
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
  });

  await test('Fetch single sales order by ID', async () => {
    const res = await request('GET', `/api/sales/${testSaleId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Delete test sale order', async () => {
    const res = await request('DELETE', `/api/sales/${testSaleId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  const testPurId = `TEST-PUR-${Date.now()}`;
  await test('Fetch purchase orders', async () => {
    const res = await request('GET', '/api/purchases');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Create purchase order', async () => {
    const res = await request('POST', '/api/purchases', {
      id: testPurId,
      supplier: 'Southern Winding Wires Ltd',
      product: 'Copper Wire 1.0mm',
      quantity: 10,
      price: 4500,
      gst: 18,
      total: 53100
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
  });

  await test('Fetch single purchase order by ID', async () => {
    const res = await request('GET', `/api/purchases/${testPurId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Delete test purchase order', async () => {
    const res = await request('DELETE', `/api/purchases/${testPurId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 7. Users & Auth
  let testUserId = Math.floor(Math.random() * 90000) + 10000;
  await test('Create multi-staff user account', async () => {
    const res = await request('POST', '/api/users', {
      id: testUserId,
      name: 'QA Tester',
      email: `tester_${testUserId}@msmesmart.com`,
      role: 'Sales Staff',
      status: 'Active',
      joinedOn: '12 Oct 2026',
      password: 'password123'
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
    if (res.data?.data?.id) {
      testUserId = res.data.data.id;
    }
  });

  await test('Fetch single user by ID', async () => {
    const res = await request('GET', `/api/users/${testUserId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.name === 'QA Tester', 'User name mismatch');
  });

  await test('Delete test user account', async () => {
    const res = await request('DELETE', `/api/users/${testUserId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 8. Authentication tests
  await test('Fetch staff profiles for quick login', async () => {
    const res = await request('GET', '/api/auth/staff-profiles');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(Array.isArray(res.data.data), 'Expected array of staff');
  });

  await test('Authenticate Admin login with default credentials', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'admin@msmesmart.com',
      password: 'msme123'
    });
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.success === true, 'Expected login success');
    assert(res.data.user.role === 'Administrator', 'Role mismatch');
  });

  await test('Reject login with invalid credentials', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'admin@msmesmart.com',
      password: 'wrongpassword'
    });
    assert(res.status === 401, `Expected 401, got ${res.status}`);
    assert(res.data.success === false, 'Expected success=false');
  });

  // 9. Notifications
  const testNotifId = `TEST-NOTIF-${Date.now()}`;
  await test('Fetch system notifications', async () => {
    const res = await request('GET', '/api/notifications');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Create new system notification', async () => {
    const res = await request('POST', '/api/notifications', {
      id: testNotifId,
      category: 'System',
      title: 'Automated Suite Check',
      message: 'Self-test notification generated by automated test runner.',
      severity: 'info'
    });
    assert(res.status === 201 || res.status === 200, `Expected 200/201, got ${res.status}`);
  });

  await test('Mark notification as read', async () => {
    const res = await request('PATCH', `/api/notifications/${testNotifId}/read`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  await test('Delete test notification', async () => {
    const res = await request('DELETE', `/api/notifications/${testNotifId}`);
    assert(res.status === 200, `Expected 200, got ${res.status}`);
  });

  // 10. Analytics
  await test('Fetch business analytics summary', async () => {
    const res = await request('GET', '/api/analytics');
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(res.data.data.grossProfit !== undefined, 'Expected grossProfit field in analytics');
  });

  console.log(`\n------------------------------------------------------`);
  console.log(`  TEST RESULTS SUMMARY:`);
  console.log(`  Passed:  \x1b[32m${passedTests}\x1b[0m / ${totalTests}`);
  console.log(`  Failed:  \x1b[31m${failedTests}\x1b[0m / ${totalTests}`);
  console.log(`------------------------------------------------------\n`);

  if (failedTests > 0) {
    process.exit(1);
  } else {
    console.log(`\x1b[32m🎉 ALL SUITE TESTS PASSED SUCCESSFULLY! PROJECT IS READY FOR TESTING.\x1b[0m\n`);
    process.exit(0);
  }
}

runAllTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
