import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
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

const CustomerSchema = new Schema<ICustomer>(
  {
    id: { type: Number, required: true, unique: true },
    shop: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, default: '', trim: true },
    location: { type: String, default: '' },
    gstin: { type: String, default: '' },
    category: { type: String, default: 'General' },
    limit: { type: Number, default: 25000 },
    balance: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const CustomerModel = mongoose.model<ICustomer>('Customer', CustomerSchema);
