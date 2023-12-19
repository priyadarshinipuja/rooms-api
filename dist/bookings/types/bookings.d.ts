import mongoose from 'mongoose';
import { User } from 'src/users/types/user';
export declare class Booking {
    _id: string;
    room: {
        id: mongoose.Types.ObjectId;
        roomNo: number;
    };
    guest: [User];
    checkInDate: Date;
    checkOutDate: Date;
}
