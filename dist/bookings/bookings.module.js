"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bookings_repository_1 = require("./repositories/bookings.repository");
const bookings_controller_1 = require("./controllers/bookings.controller");
const bookings_schema_1 = require("./schema/bookings.schema");
const rooms_module_1 = require("../rooms/rooms.module");
const users_module_1 = require("../users/users.module");
let BookingsModule = class BookingsModule {
};
BookingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            rooms_module_1.RoomsModule,
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Booking',
                    schema: bookings_schema_1.BookingSchema,
                },
            ]),
        ],
        controllers: [bookings_controller_1.BookingsController],
        providers: [bookings_repository_1.BookingsRepository],
    })
], BookingsModule);
exports.BookingsModule = BookingsModule;
//# sourceMappingURL=bookings.module.js.map