import {
  Body,
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { RestaurantsRepository } from '../repositories/restaurants.repository';
import { Restaurant } from '../types/restaurants';

@Controller('restaurants')
@UsePipes(ValidationPipe)
export class RestaurantsController {
  constructor(private restaurantsRepository: RestaurantsRepository) {}

  @Post('create')
  //@UseGuards(AdminGuard)
  async addRestaurants(
    @Body() restaurants: Restaurant[],
  ): Promise<Restaurant[]> {
    console.log('creating new restaurants', restaurants);

    return this.restaurantsRepository.addRestaurant(restaurants);
  }


  
  @Get()
  async findAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantsRepository.findAll();
  }
 @Get(':id/meals')
  async findRestaurantMeals(@Param('id') id: string) {
    console.log('Finding by id', id);
    return this.restaurantsRepository.findRestaurantsMeals(id);
   
  }
  @Get(':id')
  async findRestaurantByID(@Param('id') id: string) {
    console.log('Finding by id', id);

    const restaurants = await this.restaurantsRepository.findRestaurantByID(id);

    if (!restaurants) {
      throw new NotFoundException('Could not find restaurants of id' + id);
    }

    return restaurants;
  }
 
  @Get(':email')
  async findRestaurantByEmail(@Param('email') email: string) {
    console.log('Finding by id', email);

    const restaurant = await this.restaurantsRepository.findRestaurantByEmail(
      email,
    );

    if (!restaurant) {
      throw new NotFoundException(
        'Could not find restaurants of email' + email,
      );
    }

    return restaurant;
  }


  @Put(':id')
  //@UseGuards(AdminGuard)
  async updateRestaurant(
    @Param('id') restaurantId: string,
    @Body() changes: Restaurant,
  ): Promise<Restaurant> {
    return this.restaurantsRepository.updateRestaurant(restaurantId, changes);
  }

  @Delete(':id')
  //@UseGuards(AdminGuard)
  async deleteRestaurant(@Param('id') restaurantId: string) {
    return this.restaurantsRepository.deleteRestaurant(restaurantId);
  }
}
