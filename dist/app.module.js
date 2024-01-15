"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const constant_1 = require("./constant");
const rooms_module_1 = require("./rooms/rooms.module");
const restaurants_module_1 = require("./restaurants/restaurants.module");
const bookings_module_1 = require("./bookings/bookings.module");
const users_module_1 = require("./users/users.module");
const meals_module_1 = require("./meals/meals.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            rooms_module_1.RoomsModule,
            restaurants_module_1.RestaurantsModule,
            bookings_module_1.BookingsModule,
            meals_module_1.MealsModule,
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forRoot(constant_1.MONGO_CONNECTION),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map