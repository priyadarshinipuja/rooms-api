import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../types/order';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectModel('Order')
    private orderModel: Model<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }

  async addOrder(orders: Partial<Order[]>): Promise<Order[]> {
    return this.orderModel.insertMany(orders);
  }

  async findOrderByID(orderId: string): Promise<Order> {
    return this.orderModel.findOne({ _id: orderId });
  }
    async findOrders(orderIds:Order[]):Promise<Order[]>{
        console.log('orderIds', orderIds)
        const orders=  await this.orderModel.find({_id:orderIds});
    //   console.log('orders', orders)
        return orders
    }

  async updateOrder(orderId: string, changes: Partial<Order>): Promise<Order> {
       const order = await this.findOrderByID(orderId);
    if(!order){
        throw new HttpException(
        `Order with id ${orderId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('updating room ' + orderId);
    return this.orderModel.findOneAndUpdate({ _id: orderId }, changes);
  }


  async deleteOrder(orderId: string) {
       const room = await this.findOrderByID(orderId);
    if(!room){
        throw new HttpException(
        `Room with id ${orderId} doesn't exist}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('deleting room ' + orderId);
    return this.orderModel.deleteOne({ _id: orderId });
  }
}
