import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsRepository } from './repositories/bookings.repository';
import { BookingsController } from './controllers/bookings.controller';
import { BookingSchema } from './schema/bookings.schema';
import { RoomsModule } from '../rooms/rooms.module';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [
    RoomsModule,
    UsersModule,
    MongooseModule.forFeature([
      {
        name: 'Booking',
        schema: BookingSchema,
      },
    ]),
  ],
  controllers: [BookingsController],
  providers: [BookingsRepository],
})
export class BookingsModule {}
