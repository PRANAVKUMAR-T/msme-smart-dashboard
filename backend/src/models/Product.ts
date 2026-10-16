import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: string;
  stock: number;
  price: number;
  category: string;
  reorderLevel?: number;
}

const ProductSchema = new Schema<IProduct>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    category: { type: String, default: 'General' },
    reorderLevel: { type: Number, default: 10 },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model<IProduct>('Product', ProductSchema);
