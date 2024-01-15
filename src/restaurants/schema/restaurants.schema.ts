import mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true, },
  mobile: { type: Number, required: true },
  images: { type: Array},
  address: { city: String, country: String, state: String },
  user: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  meal:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }],
  noOfTables:{type: Number, required: true}
});
