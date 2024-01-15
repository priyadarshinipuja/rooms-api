import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './schema/restaurants.schema';
import { RestaurantsRepository } from './repositories/restaurants.repository';
import { RestaurantsController } from './controllers/restaurants.controller';
import { MealsModule } from 'src/meals/meals.module';
@Module({
  imports: [
    MealsModule,
    MongooseModule.forFeature([
      {
        name: 'Restaurant',
        schema: RestaurantSchema,
      },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsRepository],
  exports: [RestaurantsRepository],
})
export class RestaurantsModule {}
