import mongoose, { Schema, Document } from 'mongoose';

export interface IUserAccount extends Document {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinedOn: string;
  allowedPages?: string[];
  password?: string;
}

const UserAccountSchema = new Schema<IUserAccount>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    role: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    joinedOn: { type: String, required: true },
    allowedPages: { type: [String], default: undefined },
    password: { type: String, default: 'msme123' },
  },
  { timestamps: true }
);

export const UserAccountModel = mongoose.model<IUserAccount>('UserAccount', UserAccountSchema);

