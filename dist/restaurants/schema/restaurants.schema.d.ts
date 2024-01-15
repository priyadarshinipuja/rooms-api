import mongoose from 'mongoose';
export declare const RestaurantSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description: string;
    name: string;
    email: string;
    mobile: number;
    images: any[];
    user: mongoose.Types.ObjectId[];
    meal: mongoose.Types.ObjectId[];
    noOfTables: number;
    address?: {
        city?: string;
        country?: string;
        state?: string;
    };
}>;
