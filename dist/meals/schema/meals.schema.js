"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealSchema = exports.FoodType = exports.Category = exports.SubCategory = void 0;
const mongoose_1 = require("mongoose");
var SubCategory;
(function (SubCategory) {
    SubCategory["APPETIZER"] = "Appetizer";
    SubCategory["MAINCOURSE"] = "MainCourse";
    SubCategory["DESSERTS"] = "Desserts";
    SubCategory["DRINKS"] = "Drinks";
})(SubCategory = exports.SubCategory || (exports.SubCategory = {}));
var Category;
(function (Category) {
    Category["INDIAN"] = "Indian";
    Category["THAI"] = "Thai";
    Category["ITALIAN"] = "Italian";
    Category["CHINESE"] = "Chinese";
})(Category = exports.Category || (exports.Category = {}));
var FoodType;
(function (FoodType) {
    FoodType["VEG"] = "Veg";
    FoodType["NONVEG"] = "NonVeg";
})(FoodType = exports.FoodType || (exports.FoodType = {}));
exports.MealSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: Category, required: true },
    subCategory: { type: String, enum: SubCategory, required: true },
    type: { type: String, enum: FoodType, required: true },
    qty: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
});
//# sourceMappingURL=meals.schema.js.map