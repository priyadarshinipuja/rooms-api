import {
  Body,
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { MealsRepository } from '../repositories/meals.repository';
import { Meal } from '../types/meals';

@Controller('meals')
export class MealsController {
  constructor(private mealsRepository: MealsRepository) {}

  @Post('create')
  //@UseGuards(AdminGuard)
  async addMeals(@Body() meals: Meal[]): Promise<Meal[]> {
    console.log('creating new meals', meals);

    return this.mealsRepository.addMeal(meals);
  }

  @Get()
  async findAllMeals(): Promise<Meal[]> {
    console.log('mealssRepository', this.mealsRepository);
    return this.mealsRepository.findAll();
  }

  @Get(':id')
  async findMealByID(@Param('id') id: string) {
    console.log('Finding by id', id);

    const meals = await this.mealsRepository.findMealByID(id);

    if (!meals) {
      throw new NotFoundException('Could not find meals of id' + id);
    }

    return meals;
  }

  @Put(':id')
  //@UseGuards(AdminGuard)
  async updateMeal(
    @Param('id') mealsId: string,
    @Body() changes: Meal,
  ): Promise<Meal> {
    return this.mealsRepository.updateMeal(mealsId, changes);
  }

  @Delete(':id')
  //@UseGuards(AdminGuard)
  async deleteMeal(@Param('id') mealId: string) {

    return this.mealsRepository.deleteMeal(mealId);
  }
}
