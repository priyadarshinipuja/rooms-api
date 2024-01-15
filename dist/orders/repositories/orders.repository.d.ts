import { Model } from 'mongoose';
import { Order } from '../types/order';
export declare class OrdersRepository {
    private orderModel;
    constructor(orderModel: Model<Order>);
    findAll(): Promise<Order[]>;
    addOrder(orders: Partial<Order[]>): Promise<Order[]>;
    findOrderByID(orderId: string): Promise<Order>;
    findOrders(orderIds: Order[]): Promise<Order[]>;
    updateOrder(orderId: string, changes: Partial<Order>): Promise<Order>;
    deleteOrder(orderId: string): Promise<import("mongodb").DeleteResult>;
}
