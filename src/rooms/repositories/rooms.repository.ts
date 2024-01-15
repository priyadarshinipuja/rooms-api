import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from '../types/room';

@Injectable()
export class RoomsRepository {
  constructor(
    @InjectModel('Room')
    private roomModel: Model<Room>,
  ) {}

  async findAll(): Promise<Room[]> {
    return this.roomModel.find();
  }

  async addRoom(room: Partial<Room>): Promise<Room> {
    const newCourse = new this.roomModel(room);
    await newCourse.save();
    return newCourse;
  }

  async findRoomByID(roomId: string): Promise<Room> {
    return this.roomModel.findOne({ _id: roomId });
  }

  async findRoomByRoomNO(roomNo: number): Promise<Room> {
    return this.roomModel.findOne({ roomNo: roomNo });
  }

  async findAvailableRooms(): Promise<Room[]> {
    return this.roomModel.find({ isAvailable: true });
  }

  async updateRoom(roomId: string, changes: Partial<Room>): Promise<Room> {
        const room = await this.findRoomByID(roomId);
    if(!room){
        throw new HttpException(
        `Room with id ${roomId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('updating room',roomId);

    return this.roomModel.findOneAndUpdate({ _id: roomId }, changes);
  }

 async deleteRoom(roomId: string) {
       const room = await this.findRoomByID(roomId);
    if(!room){
        throw new HttpException(
        `Room with id ${roomId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('deleting room ' + roomId);
    return this.roomModel.deleteOne({ _id: roomId });
  }
}
