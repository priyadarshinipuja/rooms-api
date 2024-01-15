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
exports.RestaurantsController = void 0;
const common_1 = require("@nestjs/common");
const restaurants_repository_1 = require("../repositories/restaurants.repository");
const restaurants_1 = require("../types/restaurants");
let RestaurantsController = class RestaurantsController {
    constructor(restaurantsRepository) {
        this.restaurantsRepository = restaurantsRepository;
    }
    async addRestaurants(restaurants) {
        console.log('creating new restaurants', restaurants);
        return this.restaurantsRepository.addRestaurant(restaurants);
    }
    async findAllRestaurants() {
        return this.restaurantsRepository.findAll();
    }
    async findRestaurantMeals(id) {
        console.log('Finding by id', id);
        return this.restaurantsRepository.findRestaurantsMeals(id);
    }
    async findRestaurantByID(id) {
        console.log('Finding by id', id);
        const restaurants = await this.restaurantsRepository.findRestaurantByID(id);
        if (!restaurants) {
            throw new common_1.NotFoundException('Could not find restaurants of id' + id);
        }
        return restaurants;
    }
    async findRestaurantByEmail(email) {
        console.log('Finding by id', email);
        const restaurant = await this.restaurantsRepository.findRestaurantByEmail(email);
        if (!restaurant) {
            throw new common_1.NotFoundException('Could not find restaurants of email' + email);
        }
        return restaurant;
    }
    async updateRestaurant(restaurantId, changes) {
        return this.restaurantsRepository.updateRestaurant(restaurantId, changes);
    }
    async deleteRestaurant(restaurantId) {
        return this.restaurantsRepository.deleteRestaurant(restaurantId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "addRestaurants", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "findAllRestaurants", null);
__decorate([
    (0, common_1.Get)(':id/meals'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "findRestaurantMeals", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "findRestaurantByID", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "findRestaurantByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, restaurants_1.Restaurant]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantsController.prototype, "deleteRestaurant", null);
RestaurantsController = __decorate([
    (0, common_1.Controller)('restaurants'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:paramtypes", [restaurants_repository_1.RestaurantsRepository])
], RestaurantsController);
exports.RestaurantsController = RestaurantsController;
//# sourceMappingURL=restaurants.controller.js.map