import mongoose, { Schema, Document } from 'mongoose';

export interface ISupplier extends Document {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  location: string;
  category: string;
  rating: number;
}

const SupplierSchema = new Schema<ISupplier>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, default: '', trim: true },
    location: { type: String, default: '' },
    category: { type: String, default: 'General Supplies' },
    rating: { type: Number, default: 4.5 },
  },
  { timestamps: true }
);

export const SupplierModel = mongoose.model<ISupplier>('Supplier', SupplierSchema);
