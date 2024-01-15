import mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    mobile: number;
    firstName: string;
    lastName: string;
    purpose: string;
    address?: {
        city?: string;
        country?: string;
        state?: string;
    };
}>;
