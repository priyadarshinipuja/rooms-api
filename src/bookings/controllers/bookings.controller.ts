import {
  Body,
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Put,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { BookingsRepository } from '../repositories/bookings.repository';
import { Booking } from '../types/bookings';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsRepository: BookingsRepository) {}

  @Post('create')
  //@UseGuards(AdminGuard)
  async addBooking(@Body() booking: Booking): Promise<Booking> {
    return this.bookingsRepository.addBooking(booking);
  }

  @Get()
  async findAllBookings(): Promise<Booking[]> {
    return this.bookingsRepository.findAll();
  }

  @Get(':id')
  async findBookingByID(@Param('id') id: string) {
    console.log('Finding by bookingid', id);

    const room = await this.bookingsRepository.findBookingByID(id);

    if (!room) {
      throw new NotFoundException('Could not find booking of ' + id);
    }

    return room;
  }

  @Put(':id')
  //@UseGuards(AdminGuard)
  async updateBooking(
    @Param('id') bookingId: string,
    @Body() changes: Booking,
  ): Promise<Booking> {
    
    return this.bookingsRepository.updateBooking(bookingId, changes);
  }

  @Delete(':id')
  //@UseGuards(AdminGuard)
  async deleteBooking(@Param('id') bookingId: string) {
    return this.bookingsRepository.deleteBooking(bookingId);
  }
}
