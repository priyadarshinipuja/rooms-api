"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.default.Schema({
    meals: [{ id: String, quantity: Number }],
    user: { id: String, name: String },
    tableNo: { type: Number, required: true }
});
//# sourceMappingURL=order.schema.js.map