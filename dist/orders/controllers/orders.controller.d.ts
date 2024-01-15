import { OrdersRepository } from '../repositories/orders.repository';
import { Order } from '../types/order';
export declare class OrdersController {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    addOrders(orders: Order[]): Promise<Order[]>;
    findAllOrders(): Promise<Order[]>;
    findOrderByID(id: string): Promise<Order>;
    updateOrder(ordersId: string, changes: Order): Promise<Order>;
    deleteOrder(orderId: string): Promise<import("mongodb").DeleteResult>;
}
