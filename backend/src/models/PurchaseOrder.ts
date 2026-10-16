import mongoose, { Schema, Document } from 'mongoose';

export interface IPurchaseOrder extends Document {
  id: string;
  supplier: string;
  product: string;
  quantity: number;
  price: number;
  gst: number;
  total: number;
  date: string;
}

const PurchaseOrderSchema = new Schema<IPurchaseOrder>(
  {
    id: { type: String, required: true, unique: true },
    supplier: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    gst: { type: Number, default: 18 },
    total: { type: Number, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

export const PurchaseOrderModel = mongoose.model<IPurchaseOrder>('PurchaseOrder', PurchaseOrderSchema);
