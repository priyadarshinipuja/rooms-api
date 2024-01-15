import { Model } from 'mongoose';
import { Meal } from '../types/meals';
export declare class MealsRepository {
    private mealModel;
    constructor(mealModel: Model<Meal>);
    findAll(): Promise<Meal[]>;
    addMeal(meals: Partial<Meal[]>): Promise<Meal[]>;
    findMealByID(mealId: string): Promise<Meal>;
    findMeals(mealIds: Meal[]): Promise<Meal[]>;
    updateMeal(mealId: string, changes: Partial<Meal>): Promise<Meal>;
    deleteMeal(mealId: string): Promise<import("mongodb").DeleteResult>;
}
