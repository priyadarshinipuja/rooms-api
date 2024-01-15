import {
  Body,
  Controller,
  Get,
  Param,
  NotFoundException,
  BadRequestException,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { RoomsRepository } from '../repositories/rooms.repository';
import { Room } from '../types/room';

@Controller('rooms')
export class RoomController {
  constructor(private roomsRespository: RoomsRepository) {}

  @Post('create')
  //@UseGuards(AdminGuard)
  async addRoom(@Body() room: Room): Promise<Room> {
    console.log('creating new room', room);

    return this.roomsRespository.addRoom(room);
  }

  @Get()
  async findAllRooms(): Promise<Room[]> {
    console.log('roomsRespository', this.roomsRespository);
    return this.roomsRespository.findAll();
  }
  @Get('available')
  async findAvailableRooms(): Promise<Room[]> {
    console.log('roomsRespository', this.roomsRespository);
    return this.roomsRespository.findAvailableRooms();
  }

  @Get(':id')
  async findRoomByID(@Param('id') id: string) {
    console.log('Finding by id', id);

    const room = await this.roomsRespository.findRoomByID(id);

    if (!room) {
      throw new NotFoundException('Could not find room of ' + id);
    }

    return room;
  }
  // @Get(':rommNo')
  // async findRoomByRoomNo(@Param('roomNo') roomNo: number) {
  //   console.log('Finding by roomNo', roomNo);

  //   const room = await this.roomsRespository.find({ roomNo: roomNo });

  //   if (!room) {
  //     throw new NotFoundException('Could not find room of ' + roomNo);
  //   }

  //   return room;
  // }

  @Put(':id')
  //@UseGuards(AdminGuard)
  async updateRoom(
    @Param('id') roomId: string,
    @Body() changes: Room,
  ): Promise<Room> {


    return this.roomsRespository.updateRoom(roomId, changes);
  }

  @Delete(':id')
  //@UseGuards(AdminGuard)
  async deleteRoom(@Param('id') roomId: string) {

    return this.roomsRespository.deleteRoom(roomId);
  }
}
