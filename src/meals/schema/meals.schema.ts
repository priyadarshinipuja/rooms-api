import mongoose from 'mongoose';

export enum SubCategory {
  APPETIZER = 'Appetizer',
  MAINCOURSE = 'MainCourse',
  DESSERTS = 'Desserts',
  DRINKS = 'Drinks',
}

export enum Category {
  INDIAN = 'Indian',
  THAI = 'Thai',
  ITALIAN = 'Italian',
  CHINESE = 'Chinese',
}
export enum FoodType{
    VEG='Veg',
    NONVEG='NonVeg'
}

export const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum:Category, required: true },
  subCategory: { type: String, enum:SubCategory, required:true},
  type: { type: String, enum:FoodType, required:true},
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true},

});
