import mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    meals: {
        id?: string;
        quantity?: number;
    }[];
    tableNo: number;
    user?: {
        id?: string;
        name?: string;
    };
}>;
