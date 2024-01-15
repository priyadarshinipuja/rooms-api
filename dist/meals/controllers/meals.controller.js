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
exports.MealsController = void 0;
const common_1 = require("@nestjs/common");
const meals_repository_1 = require("../repositories/meals.repository");
const meals_1 = require("../types/meals");
let MealsController = class MealsController {
    constructor(mealsRepository) {
        this.mealsRepository = mealsRepository;
    }
    async addMeals(meals) {
        console.log('creating new meals', meals);
        return this.mealsRepository.addMeal(meals);
    }
    async findAllMeals() {
        console.log('mealssRepository', this.mealsRepository);
        return this.mealsRepository.findAll();
    }
    async findMealByID(id) {
        console.log('Finding by id', id);
        const meals = await this.mealsRepository.findMealByID(id);
        if (!meals) {
            throw new common_1.NotFoundException('Could not find meals of id' + id);
        }
        return meals;
    }
    async updateMeal(mealsId, changes) {
        return this.mealsRepository.updateMeal(mealsId, changes);
    }
    async deleteMeal(mealId) {
        return this.mealsRepository.deleteMeal(mealId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "addMeals", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "findAllMeals", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "findMealByID", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, meals_1.Meal]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "updateMeal", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "deleteMeal", null);
MealsController = __decorate([
    (0, common_1.Controller)('meals'),
    __metadata("design:paramtypes", [meals_repository_1.MealsRepository])
], MealsController);
exports.MealsController = MealsController;
//# sourceMappingURL=meals.controller.js.map