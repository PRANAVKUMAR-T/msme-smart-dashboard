import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  id: string;
  category: 'Inventory' | 'Sales' | 'Purchases' | 'System';
  title: string;
  message: string;
  time: string;
  read: boolean;
  severity: 'critical' | 'warning' | 'success' | 'purple' | 'info';
  linkPage?: string;
}

const NotificationSchema = new Schema<INotification>(
  {
    id: { type: String, required: true, unique: true },
    category: { type: String, enum: ['Inventory', 'Sales', 'Purchases', 'System'], required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    time: { type: String, required: true },
    read: { type: Boolean, default: false },
    severity: { type: String, enum: ['critical', 'warning', 'success', 'purple', 'info'], default: 'info' },
    linkPage: { type: String },
  },
  { timestamps: true }
);

export const NotificationModel = mongoose.model<INotification>('Notification', NotificationSchema);
