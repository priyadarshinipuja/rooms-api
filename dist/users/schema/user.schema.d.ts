import mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
}>;
