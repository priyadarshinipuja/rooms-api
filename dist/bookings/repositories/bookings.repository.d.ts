import { UsersRepository } from './../../users/repositories/users.repository';
import { Model } from 'mongoose';
import { Booking } from '../types/bookings';
import { RoomsRepository } from '../../rooms/repositories/rooms.repository';
export declare class BookingsRepository {
    private bookingModel;
    private roomsRespository;
    private usersRepository;
    constructor(bookingModel: Model<Booking>, roomsRespository: RoomsRepository, usersRepository: UsersRepository);
    findAll(): Promise<Booking[]>;
    addBooking(Booking: Partial<Booking>): Promise<Booking>;
    findBookingByID(bookingId: string): Promise<Booking>;
    updateBooking(bookingId: string, changes: Partial<Booking>): Promise<Booking>;
    deleteBooking(bookingId: string): Promise<import("mongodb").DeleteResult>;
}
