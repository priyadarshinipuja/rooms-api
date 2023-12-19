import { Module } from '@nestjs/common';
import { RoomController } from './controllers/rooms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsSchema } from './schema/rooms.schema';
import { RoomsRepository } from './repositories/rooms.repository';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Room',
        schema: RoomsSchema,
      },
    ]),
  ],
  exports: [RoomsRepository],
  controllers: [RoomController],
  providers: [RoomsRepository],
})
export class RoomsModule {}
