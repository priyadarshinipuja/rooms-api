import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from '../types/meals';

@Injectable()
export class MealsRepository {
  constructor(
    @InjectModel('Meal')
    private mealModel: Model<Meal>,
  ) {}

  async findAll(): Promise<Meal[]> {
    return this.mealModel.find();
  }

  async addMeal(meals: Partial<Meal[]>): Promise<Meal[]> {
    return this.mealModel.insertMany(meals);
  }

  async findMealByID(mealId: string): Promise<Meal> {
    return this.mealModel.findOne({ _id: mealId });
  }
    async findMeals(mealIds:Meal[]):Promise<Meal[]>{
        console.log('mealIds', mealIds)
        const meals=  await this.mealModel.find({_id:mealIds});
    //   console.log('meals', meals)
        return meals
    }

  async updateMeal(mealId: string, changes: Partial<Meal>): Promise<Meal> {
       const meal = await this.findMealByID(mealId);
    if(!meal){
        throw new HttpException(
        `Meal with id ${mealId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('updating room ' + mealId);
    return this.mealModel.findOneAndUpdate({ _id: mealId }, changes);
  }


  async deleteMeal(mealId: string) {
       const room = await this.findMealByID(mealId);
    if(!room){
        throw new HttpException(
        `Room with id ${mealId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('deleting room ' + mealId);
    return this.mealModel.deleteOne({ _id: mealId });
  }
}
