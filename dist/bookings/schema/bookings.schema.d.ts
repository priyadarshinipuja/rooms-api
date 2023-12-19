import mongoose from 'mongoose';
export declare const BookingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    guest: {
        firstName: string;
        lastName: string;
        email: string;
        mobile: number;
        purpose: string;
        address?: {
            city?: string;
            country?: string;
            state?: string;
        };
    }[];
    checkInDate: Date;
    checkOutDate: Date;
    room?: {
        id: {
            prototype?: mongoose.Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            isValid?: {};
        };
        roomNo?: number;
    };
}>;
