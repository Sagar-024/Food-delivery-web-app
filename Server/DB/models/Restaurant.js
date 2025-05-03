import { Schema, model } from 'mongoose';


const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Restaurant name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name must be under 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [5, 'Description must be at least 5 characters']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    minlength: [3, 'Location must be at least 3 characters']
  },
  cuisine: {
    type: [String],
    required: [true, 'Cuisine type is required'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    match: [/^https?:\/\/.+/, 'Image must be a valid URL']
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Owner (admin user) reference is required']
  }
}, { timestamps: true });

export default model('Restaurant', RestaurantSchema);