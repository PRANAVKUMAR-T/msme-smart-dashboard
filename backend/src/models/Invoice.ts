import mongoose, { Schema, Document } from 'mongoose';

export interface IInvoice extends Document {
  id: string;
  customer: string;
  date: string;
  dueDate: string;
  amount: number;
  gst: number;
  total: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

const InvoiceSchema = new Schema<IInvoice>(
  {
    id: { type: String, required: true, unique: true },
    customer: { type: String, required: true },
    date: { type: String, required: true },
    dueDate: { type: String, required: true },
    amount: { type: Number, required: true },
    gst: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, enum: ['Paid', 'Pending', 'Overdue'], default: 'Pending' },
  },
  { timestamps: true }
);

export const InvoiceModel = mongoose.model<IInvoice>('Invoice', InvoiceSchema);
