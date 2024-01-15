import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealSchema } from './schema/meals.schema';
import { MealsController } from './controllers/meals.controller';
import { MealsRepository } from './repositories/meals.repository';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Meal',
        schema: MealSchema,
      },
    ]),
  ],
  controllers: [MealsController],
  providers: [MealsRepository],
  exports: [MealsRepository],
})
export class MealsModule {}
