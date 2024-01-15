import {
  Body,
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { OrdersRepository } from '../repositories/orders.repository';
import { Order } from '../types/order';

@Controller('orders')
export class OrdersController {
  constructor(private ordersRepository: OrdersRepository) {}

  @Post('create')
  //@UseGuards(AdminGuard)
  async addOrders(@Body() orders: Order[]): Promise<Order[]> {
    console.log('creating new orders', orders);

    return this.ordersRepository.addOrder(orders);
  }

  @Get()
  async findAllOrders(): Promise<Order[]> {
    console.log('orderssRepository', this.ordersRepository);
    return this.ordersRepository.findAll();
  }

  @Get(':id')
  async findOrderByID(@Param('id') id: string) {
    console.log('Finding by id', id);

    const orders = await this.ordersRepository.findOrderByID(id);

    if (!orders) {
      throw new NotFoundException('Could not find orders of id' + id);
    }

    return orders;
  }

  @Put(':id')
  //@UseGuards(AdminGuard)
  async updateOrder(
    @Param('id') ordersId: string,
    @Body() changes: Order,
  ): Promise<Order> {
    return this.ordersRepository.updateOrder(ordersId, changes);
  }

  @Delete(':id')
  //@UseGuards(AdminGuard)
  async deleteOrder(@Param('id') orderId: string) {

    return this.ordersRepository.deleteOrder(orderId);
  }
}
