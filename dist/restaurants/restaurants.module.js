"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const restaurants_schema_1 = require("./schema/restaurants.schema");
const restaurants_repository_1 = require("./repositories/restaurants.repository");
const restaurants_controller_1 = require("./controllers/restaurants.controller");
const meals_module_1 = require("../meals/meals.module");
let RestaurantsModule = class RestaurantsModule {
};
RestaurantsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            meals_module_1.MealsModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Restaurant',
                    schema: restaurants_schema_1.RestaurantSchema,
                },
            ]),
        ],
        controllers: [restaurants_controller_1.RestaurantsController],
        providers: [restaurants_repository_1.RestaurantsRepository],
        exports: [restaurants_repository_1.RestaurantsRepository],
    })
], RestaurantsModule);
exports.RestaurantsModule = RestaurantsModule;
//# sourceMappingURL=restaurants.module.js.map