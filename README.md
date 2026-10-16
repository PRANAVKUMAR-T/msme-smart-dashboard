# MSME Smart Business Dashboard

A full-stack business intelligence and management solution tailored for Indian MSMEs, featuring inventory management, GST invoicing, cash-flow forecasting, customer ledger, and supplier tracking.

## Architecture

This repository is split into independent **frontend** and **backend** modules:

```
Mini Project S5/
├── frontend/             # React + Vite + TypeScript + TailwindCSS
│   ├── src/              # Application components, pages, analytics UI, API client
│   ├── index.html        # HTML entry point
│   ├── vite.config.ts    # Vite configuration with /api proxy to port 5000
│   ├── tsconfig.json     # Frontend TypeScript configuration
│   └── package.json      # Frontend dependencies
│
├── backend/              # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── routes/       # REST API endpoints (customers, sales, purchases, invoices, products, analytics)
│   │   ├── data/         # In-memory data store with MSME seed data
│   │   └── server.ts     # Express application setup & middleware
│   ├── .env              # Backend environment variables (PORT=5000)
│   ├── tsconfig.json     # Backend TypeScript configuration
│   └── package.json      # Backend dependencies
│
├── package.json          # Root orchestration scripts
└── README.md
```

## Getting Started

### 1. Install Dependencies
Run the command below in the project root to install dependencies for root, frontend, and backend:
```bash
npm run install:all
```
*(Or navigate to `frontend` and `backend` respectively and run `npm install`)*

### 2. Run Both Services Concurrently
From the root directory:
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### 3. Run Services Individually
- **Frontend only**:
  ```bash
  npm run dev:frontend
  # or: cd frontend && npm run dev
  ```
- **Backend only**:
  ```bash
  npm run dev:backend
  # or: cd backend && npm run dev
  ```

## Database Configuration (MongoDB & Mongoose)

The project now supports **MongoDB** as a full **MERN Stack** (MongoDB, Express, React, Node.js).

### Mongoose Models Created:
- `Customer`: Contact, shop, GSTIN, credit limits, balances
- `Supplier`: Vendor details, category, performance rating
- `Product`: Inventory stock, price, category
- `SaleOrder`: Customer order, product, quantity, amount, payment status
- `PurchaseOrder`: Vendor order, product, price, GST tax rate, total
- `Invoice`: GST invoice, line items, due date, payment status
- `UserAccount`: Multi-staff accounts, roles, active status
- `Notification`: Real-time stock alerts and system notices

### How to Connect MongoDB:

1. **Option A: MongoDB Atlas (Free Cloud Cluster — Recommended)**:
   - Create a free cluster at [cloud.mongodb.com](https://www.mongodb.com/cloud/atlas).
   - Get your connection URI: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/msme_smart?retryWrites=true&w=majority`
   - In `backend/.env`, set:
     ```env
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/msme_smart?retryWrites=true&w=majority
     ```

2. **Option B: Local MongoDB**:
   - If MongoDB Community Server is installed locally:
     ```env
     MONGODB_URI=mongodb://127.0.0.1:27017/msme_smart
     ```

> **Smart Auto-Seeding & Fallback**:
> When MongoDB connects, it **automatically seeds** all initial MSME demo records if the collections are empty.
> If MongoDB is temporarily offline or not connected, the server automatically uses the in-memory fallback so your app never crashes.

