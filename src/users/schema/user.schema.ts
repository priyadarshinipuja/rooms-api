import mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  purpose: { type: String, required: true },
  address: { city: String, country: String, state: String },
});
