import { Schema, model } from 'mongoose';

const RestaurantSchema = new Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

export default model('Restaurant', RestaurantSchema);