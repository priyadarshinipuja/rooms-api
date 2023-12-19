"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchema = void 0;
const mongoose_1 = require("mongoose");
const user_schema_1 = require("../../users/schema/user.schema");
exports.BookingSchema = new mongoose_1.Schema({
    room: {
        id: { type: mongoose_1.default.Types.ObjectId, ref: 'Room', required: true },
        roomNo: { type: Number },
    },
    guest: [{ type: user_schema_1.UsersSchema, required: true }],
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
});
//# sourceMappingURL=bookings.schema.js.map