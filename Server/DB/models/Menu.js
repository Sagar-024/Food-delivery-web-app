import { Schema, model } from 'mongoose';

const MenuSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Menu item name is required'],
    minlength: [2, 'Menu name must be at least 2 characters long'],
    maxlength: [100, 'Menu name must be less than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [5, 'Description must be at least 5 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    match: [/^https?:\/\/.+/, 'Image must be a valid URL']
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: [true, 'Restaurant reference is required']
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export default model('Menu', MenuSchema);