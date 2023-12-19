import mongoose from 'mongoose';

export const RoomsSchema = new mongoose.Schema({
  roomNo: { type: Number, unique: true, required: true },
  image: { type: String, required: true },
  capacity: { type: Number, required: true },
  floorNo: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  type: String,
  category: String,
  isAvailable: { type: Boolean, default: true },
});
