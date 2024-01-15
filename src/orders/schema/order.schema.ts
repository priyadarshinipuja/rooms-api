
import mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
 meals:[{id:String, quantity: Number}],
 user:{id:String, name:String},
 tableNo:{type: Number, required: true}

});
