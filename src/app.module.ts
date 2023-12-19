import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_CONNECTION } from './constant';
import { RoomsModule } from './rooms/rooms.module';
// import { RestaurantsModule } from './restaurants/restaurant.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    RoomsModule,
    // RestaurantsModule,
    BookingsModule,
    UsersModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
