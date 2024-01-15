import { RestaurantsRepository } from '../repositories/restaurants.repository';
import { Restaurant } from '../types/restaurants';
export declare class RestaurantsController {
    private restaurantsRepository;
    constructor(restaurantsRepository: RestaurantsRepository);
    addRestaurants(restaurants: Restaurant[]): Promise<Restaurant[]>;
    findAllRestaurants(): Promise<Restaurant[]>;
    findRestaurantMeals(id: string): Promise<import("../../meals/types/meals").Meal[]>;
    findRestaurantByID(id: string): Promise<Restaurant>;
    findRestaurantByEmail(email: string): Promise<Restaurant>;
    updateRestaurant(restaurantId: string, changes: Restaurant): Promise<Restaurant>;
    deleteRestaurant(restaurantId: string): Promise<import("mongodb").DeleteResult>;
}
