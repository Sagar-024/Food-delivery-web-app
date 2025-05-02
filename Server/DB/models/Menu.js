import { Schema, model } from 'mongoose';

const MenuSchema = new Schema({
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  name: String,
  description: String,
  price: Number,
  image: String,
});

export default model('Menu', MenuSchema);