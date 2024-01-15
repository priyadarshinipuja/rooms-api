import { Model } from 'mongoose';
import { Restaurant } from '../types/restaurants';
import { Meal } from 'src/meals/types/meals';
import { MealsRepository } from 'src/meals/repositories/meals.repository';
export declare class RestaurantsRepository {
    private restaurantModel;
    private mealRepository;
    constructor(restaurantModel: Model<Restaurant>, mealRepository: MealsRepository);
    findAll(): Promise<Restaurant[]>;
    addRestaurant(restaurants: Partial<Restaurant[]>): Promise<Restaurant[]>;
    findRestaurantByID(restaurantId: string): Promise<Restaurant>;
    findRestaurantsMeals(restaurantId: string): Promise<Meal[]>;
    findRestaurantByEmail(email: string): Promise<Restaurant>;
    updateRestaurant(restaurantId: string, changes: Partial<Restaurant>): Promise<Restaurant>;
    deleteRestaurant(restaurantId: string): Promise<import("mongodb").DeleteResult>;
}
