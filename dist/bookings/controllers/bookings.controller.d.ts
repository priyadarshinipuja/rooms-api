import { BookingsRepository } from '../repositories/bookings.repository';
import { Booking } from '../types/bookings';
export declare class BookingsController {
    private bookingsRepository;
    constructor(bookingsRepository: BookingsRepository);
    addBooking(booking: Booking): Promise<Booking>;
    findAllBookings(): Promise<Booking[]>;
    findBookingByID(id: string): Promise<Booking>;
    updateBooking(bookingId: string, changes: Booking): Promise<Booking>;
    deleteBooking(bookingId: string): Promise<import("mongodb").DeleteResult>;
}
