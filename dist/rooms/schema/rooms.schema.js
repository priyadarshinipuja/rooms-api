"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RoomsSchema = new mongoose_1.default.Schema({
    roomNo: { type: Number, unique: true, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    floorNo: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    type: String,
    category: String,
    isAvailable: { type: Boolean, default: true },
});
//# sourceMappingURL=rooms.schema.js.map