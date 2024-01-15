"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const meals_repository_1 = require("../../meals/repositories/meals.repository");
let RestaurantsRepository = class RestaurantsRepository {
    constructor(restaurantModel, mealRepository) {
        this.restaurantModel = restaurantModel;
        this.mealRepository = mealRepository;
    }
    async findAll() {
        return this.restaurantModel.find();
    }
    async addRestaurant(restaurants) {
        return this.restaurantModel.insertMany(restaurants);
    }
    async findRestaurantByID(restaurantId) {
        return this.restaurantModel.findOne({ _id: restaurantId });
    }
    async findRestaurantsMeals(restaurantId) {
        const restaurants = await this.findRestaurantByID(restaurantId);
        if (!restaurants) {
            throw new common_1.NotFoundException('Could not find restaurants of id' + restaurantId);
        }
        const mealData = await this.mealRepository.findMeals(restaurants.meal);
        return mealData;
    }
    async findRestaurantByEmail(email) {
        return this.restaurantModel.findOne({ email: email });
    }
    async updateRestaurant(restaurantId, changes) {
        const restaurant = await this.findRestaurantByID(restaurantId);
        if (!restaurant) {
            throw new common_1.HttpException(`Restaurant with id ${restaurantId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('updating restaurants');
        return this.restaurantModel.findOneAndUpdate({ _id: restaurantId }, changes);
    }
    async deleteRestaurant(restaurantId) {
        const restaurant = await this.findRestaurantByID(restaurantId);
        if (!restaurant) {
            throw new common_1.HttpException(`Restaurant with id ${restaurantId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('deleting restaurants ' + restaurantId);
        return this.restaurantModel.deleteOne({ _id: restaurantId });
    }
};
RestaurantsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Restaurant')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        meals_repository_1.MealsRepository])
], RestaurantsRepository);
exports.RestaurantsRepository = RestaurantsRepository;
//# sourceMappingURL=restaurants.repository.js.map