"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsersSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    purpose: { type: String, required: true },
    address: { city: String, country: String, state: String },
});
//# sourceMappingURL=user.schema.js.map