import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../types/restaurants';
import { Meal } from 'src/meals/types/meals';
import { MealsRepository } from 'src/meals/repositories/meals.repository';


@Injectable()
export class RestaurantsRepository {
  constructor(
    @InjectModel('Restaurant')
    private restaurantModel: Model<Restaurant>,
    private mealRepository: MealsRepository,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find();
  }

  async addRestaurant(
    restaurants: Partial<Restaurant[]>,
  ): Promise<Restaurant[]> {
    return this.restaurantModel.insertMany(restaurants);
  }

  async findRestaurantByID(restaurantId: string): Promise<Restaurant> {
    return this.restaurantModel.findOne({ _id: restaurantId });
  }

  async findRestaurantsMeals(restaurantId: string): Promise<Meal[]> {
   const restaurants : Restaurant = await this.findRestaurantByID(restaurantId);
     if (!restaurants) {
      throw new NotFoundException('Could not find restaurants of id' + restaurantId);
    }
     const mealData =  await this.mealRepository.findMeals(restaurants.meal) 
   
    return mealData;
    
  }
  async findRestaurantByEmail(email: string): Promise<Restaurant> {
    return this.restaurantModel.findOne({ email: email });
  }


  async updateRestaurant(
    restaurantId: string,
    changes: Partial<Restaurant>,
  ): Promise<Restaurant> {

    const restaurant = await this.findRestaurantByID(restaurantId);
    if(!restaurant){
        throw new HttpException(
        `Restaurant with id ${restaurantId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
     console.log('updating restaurants');

    return this.restaurantModel.findOneAndUpdate(
      { _id: restaurantId },
      changes,
    );
  }

 async deleteRestaurant(restaurantId: string) {
     const restaurant = await this.findRestaurantByID(restaurantId);
    if(!restaurant){
        throw new HttpException(
        `Restaurant with id ${restaurantId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
     console.log('deleting restaurants ' + restaurantId);

    return this.restaurantModel.deleteOne({ _id: restaurantId });
  }
}
