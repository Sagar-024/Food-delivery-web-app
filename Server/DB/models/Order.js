import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    menu: { type: Schema.Types.ObjectId, ref: 'Menu' },
    quantity: Number,
  }],
  totalPrice: Number,
  status: { type: String, default: 'Placed' },
});

export default model('Order', OrderSchema);