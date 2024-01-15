import mongoose from 'mongoose';
export declare enum SubCategory {
    APPETIZER = "Appetizer",
    MAINCOURSE = "MainCourse",
    DESSERTS = "Desserts",
    DRINKS = "Drinks"
}
export declare enum Category {
    INDIAN = "Indian",
    THAI = "Thai",
    ITALIAN = "Italian",
    CHINESE = "Chinese"
}
export declare enum FoodType {
    VEG = "Veg",
    NONVEG = "NonVeg"
}
export declare const MealSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    image: string;
    price: number;
    description: string;
    type: string;
    category: string;
    name: string;
    subCategory: string;
    qty: number;
}>;
