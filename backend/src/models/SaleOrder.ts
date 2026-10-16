import mongoose, { Schema, Document } from 'mongoose';

export interface ISaleOrder extends Document {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending';
}

const SaleOrderSchema = new Schema<ISaleOrder>(
  {
    id: { type: String, required: true, unique: true },
    customer: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ['Paid', 'Pending'], default: 'Paid' },
  },
  { timestamps: true }
);

export const SaleOrderModel = mongoose.model<ISaleOrder>('SaleOrder', SaleOrderSchema);
