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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const rooms_repository_1 = require("../repositories/rooms.repository");
const room_1 = require("../types/room");
let RoomController = class RoomController {
    constructor(roomsRespository) {
        this.roomsRespository = roomsRespository;
    }
    async addRoom(room) {
        console.log('creating new room', room);
        return this.roomsRespository.addRoom(room);
    }
    async findAllRooms() {
        console.log('roomsRespository', this.roomsRespository);
        return this.roomsRespository.findAll();
    }
    async findAvailableRooms() {
        console.log('roomsRespository', this.roomsRespository);
        return this.roomsRespository.findAvailableRooms();
    }
    async findRoomByID(id) {
        console.log('Finding by id', id);
        const room = await this.roomsRespository.findRoomByID(id);
        if (!room) {
            throw new common_1.NotFoundException('Could not find room of ' + id);
        }
        return room;
    }
    async updateRoom(roomId, changes) {
        console.log('updating room');
        if (changes._id) {
            throw new common_1.BadRequestException("Can't update room id");
        }
        return this.roomsRespository.updateRoom(roomId, changes);
    }
    async deleteRoom(roomId) {
        console.log('deleting room ' + roomId);
        return this.roomsRespository.deleteRoom(roomId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_1.Room]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "addRoom", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findAllRooms", null);
__decorate([
    (0, common_1.Get)('available'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findAvailableRooms", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findRoomByID", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, room_1.Room]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoom", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "deleteRoom", null);
RoomController = __decorate([
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [rooms_repository_1.RoomsRepository])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=rooms.controller.js.map