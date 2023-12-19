import {
  IsDate,
  IsInt,
  IsMongoId,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import mongoose from 'mongoose';
import { User } from 'src/users/types/user';

export class Booking {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsInt({ message: 'roomNo must be numeric' }) room: {
    id: mongoose.Types.ObjectId;
    roomNo: number;
  };
  @IsObject({ message: 'please provide guest info' }) guest: [User];
  @IsDate() checkInDate: Date;
  @IsDate() checkOutDate: Date;
}
