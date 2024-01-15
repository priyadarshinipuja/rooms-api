"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RestaurantSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true, },
    mobile: { type: Number, required: true },
    images: { type: Array },
    address: { city: String, country: String, state: String },
    user: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }],
    meal: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Meal' }],
    noOfTables: { type: Number, required: true }
});
//# sourceMappingURL=restaurants.schema.js.map