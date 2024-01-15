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
exports.RoomsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RoomsRepository = class RoomsRepository {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    async findAll() {
        return this.roomModel.find();
    }
    async addRoom(room) {
        const newCourse = new this.roomModel(room);
        await newCourse.save();
        return newCourse;
    }
    async findRoomByID(roomId) {
        return this.roomModel.findOne({ _id: roomId });
    }
    async findRoomByRoomNO(roomNo) {
        return this.roomModel.findOne({ roomNo: roomNo });
    }
    async findAvailableRooms() {
        return this.roomModel.find({ isAvailable: true });
    }
    async updateRoom(roomId, changes) {
        const room = await this.findRoomByID(roomId);
        if (!room) {
            throw new common_1.HttpException(`Room with id ${roomId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('updating room', roomId);
        return this.roomModel.findOneAndUpdate({ _id: roomId }, changes);
    }
    async deleteRoom(roomId) {
        const room = await this.findRoomByID(roomId);
        if (!room) {
            throw new common_1.HttpException(`Room with id ${roomId} doesn't exist}`, common_1.HttpStatus.BAD_REQUEST);
        }
        console.log('deleting room ' + roomId);
        return this.roomModel.deleteOne({ _id: roomId });
    }
};
RoomsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Room')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoomsRepository);
exports.RoomsRepository = RoomsRepository;
//# sourceMappingURL=rooms.repository.js.map