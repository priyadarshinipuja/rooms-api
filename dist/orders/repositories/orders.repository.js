"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrdersRepository = class OrdersRepository {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async findAll() {
        return this.orderModel.find();
    }
    async addOrder(orders) {
        return this.orderModel.insertMany(orders);
    }
    async findOrderByID(orderId) {
        return this.orderModel.findOne({ _id: orderId });
    }
    async findOrders(orderIds) {
        console.log('orderIds', orderIds);
        const orders = await this.orderModel.find({ _id: orderIds });
        return orders;
    }
    async updateOrder(orderId, changes) {
        const order = await this.findOrderByID(orderId);
        if (!order) {
            throw new common_1.HttpException(`Order with id ${orderId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('updating room ' + orderId);
        return this.orderModel.findOneAndUpdate({ _id: orderId }, changes);
    }
    async deleteOrder(orderId) {
        const room = await this.findOrderByID(orderId);
        if (!room) {
            throw new common_1.HttpException(`Room with id ${orderId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('deleting room ' + orderId);
        return this.orderModel.deleteOne({ _id: orderId });
    }
};
OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Order')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersRepository);
exports.OrdersRepository = OrdersRepository;
//# sourceMappingURL=orders.repository.js.map