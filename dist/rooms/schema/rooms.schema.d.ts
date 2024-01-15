import mongoose from 'mongoose';
export declare const RoomsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    roomNo: number;
    image: string;
    price: number;
    description: string;
    capacity: number;
    floorNo: number;
    isAvailable: boolean;
    type?: string;
    category?: string;
}>;
