import { Schema, model } from 'mongoose';


const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required']
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: [true, 'Restaurant reference is required']
  },
  items: [
    {
      menuItem: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: [true, 'Menu item reference is required']
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1']
      }
    }
  ],
  status: {
    type: String,
    enum: {
      values: ['pending', 'accepted', 'rejected', 'delivered'],
      message: 'Status must be one of: pending, accepted, rejected, delivered'
    },
    default: 'pending'
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Total price cannot be negative']
  },
  paymentStatus: {
    type: String,
    enum: {
      values: ['unpaid', 'paid'],
      message: 'Payment status must be either unpaid or paid'
    },
    default: 'unpaid'
  }
}, { timestamps: true });

export default model('Order', OrderSchema);