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
exports.MealsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MealsRepository = class MealsRepository {
    constructor(mealModel) {
        this.mealModel = mealModel;
    }
    async findAll() {
        return this.mealModel.find();
    }
    async addMeal(meals) {
        return this.mealModel.insertMany(meals);
    }
    async findMealByID(mealId) {
        return this.mealModel.findOne({ _id: mealId });
    }
    async findMeals(mealIds) {
        console.log('mealIds', mealIds);
        const meals = await this.mealModel.find({ _id: mealIds });
        return meals;
    }
    async updateMeal(mealId, changes) {
        const meal = await this.findMealByID(mealId);
        if (!meal) {
            throw new common_1.HttpException(`Meal with id ${mealId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('updating room ' + mealId);
        return this.mealModel.findOneAndUpdate({ _id: mealId }, changes);
    }
    async deleteMeal(mealId) {
        const room = await this.findMealByID(mealId);
        if (!room) {
            throw new common_1.HttpException(`Room with id ${mealId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('deleting room ' + mealId);
        return this.mealModel.deleteOne({ _id: mealId });
    }
};
MealsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Meal')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MealsRepository);
exports.MealsRepository = MealsRepository;
//# sourceMappingURL=meals.repository.js.map