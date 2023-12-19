import mongoose, { Schema } from 'mongoose';
import { UsersSchema } from '../../users/schema/user.schema';

export const BookingSchema = new Schema({
  room: {
    id: { type: mongoose.Types.ObjectId, ref: 'Room', required: true },
    roomNo: { type: Number },
  },
  guest: [{ type: UsersSchema, required: true }],
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
});
