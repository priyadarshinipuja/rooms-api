import { UsersRepository } from './../../users/repositories/users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from '../types/bookings';
import { RoomsRepository } from '../../rooms/repositories/rooms.repository';

@Injectable()
export class BookingsRepository {
  constructor(
    @InjectModel('Booking')
    private bookingModel: Model<Booking>,
    private roomsRespository: RoomsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find();
  }

  async addBooking(Booking: Partial<Booking>): Promise<Booking> {
    const roomId = Booking.room.id.toString();

    const room = await this.roomsRespository.findRoomByID(roomId);
    console.log('payload', Booking, 'room', room, roomId);

    if (!room.isAvailable) {
      throw new HttpException(
        'Booking already exist for this room ' + room.roomNo,
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.roomsRespository.updateRoom(room._id, { isAvailable: false });

    if (Booking.guest?.length) {
      Booking.guest.map(async (guest) => {
        const user = this.usersRepository.findUserByEmail(guest.email);
        if (!user) {
          await this.usersRepository.addUser(Booking.guest);
        }
      });
    }

    const newBooking = new this.bookingModel(Booking);
    await newBooking.save();
    return newBooking.toObject({ versionKey: false });
  }

  async findBookingByID(bookingId: string): Promise<Booking> {
    return this.bookingModel.findOne({ _id: bookingId });
  }

  async updateBooking(
    bookingId: string,
    changes: Partial<Booking>,
  ): Promise<Booking> {

    const booking = await this.findBookingByID(bookingId);
    if(!booking){
        throw new HttpException(
        `Booking with id ${bookingId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('updating booking', bookingId);

    return this.bookingModel.findOneAndUpdate({ _id: bookingId }, changes, {
      new: true,
    });
  }

  async deleteBooking(bookingId: string) {
    const booking = await this.findBookingByID(bookingId);
    if(!booking){
            throw new HttpException(
            `Booking with id ${bookingId} doesn't exist}`,
            HttpStatus.BAD_REQUEST,
        );
        }
    console.log('deleting room ' + bookingId);

    if (booking._id && booking.room.roomNo) {
      const room = await this.roomsRespository.findRoomByID(
        booking.room.id.toString(),
      );
      await this.roomsRespository.updateRoom(room._id, {
        isAvailable: true,
      });
    }
    return this.bookingModel.deleteOne({ _id: bookingId });
  }
}
