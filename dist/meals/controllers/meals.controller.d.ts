import { MealsRepository } from '../repositories/meals.repository';
import { Meal } from '../types/meals';
export declare class MealsController {
    private mealsRepository;
    constructor(mealsRepository: MealsRepository);
    addMeals(meals: Meal[]): Promise<Meal[]>;
    findAllMeals(): Promise<Meal[]>;
    findMealByID(id: string): Promise<Meal>;
    updateMeal(mealsId: string, changes: Meal): Promise<Meal>;
    deleteMeal(mealId: string): Promise<import("mongodb").DeleteResult>;
}
