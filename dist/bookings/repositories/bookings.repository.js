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
exports.BookingsRepository = void 0;
const users_repository_1 = require("./../../users/repositories/users.repository");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rooms_repository_1 = require("../../rooms/repositories/rooms.repository");
let BookingsRepository = class BookingsRepository {
    constructor(bookingModel, roomsRespository, usersRepository) {
        this.bookingModel = bookingModel;
        this.roomsRespository = roomsRespository;
        this.usersRepository = usersRepository;
    }
    async findAll() {
        return this.bookingModel.find();
    }
    async addBooking(Booking) {
        var _a;
        const roomId = Booking.room.id.toString();
        const room = await this.roomsRespository.findRoomByID(roomId);
        console.log('payload', Booking, 'room', room, roomId);
        if (!room.isAvailable) {
            throw new common_1.HttpException('Booking already exist for this room ' + room.roomNo, common_1.HttpStatus.BAD_REQUEST);
        }
        await this.roomsRespository.updateRoom(room._id, { isAvailable: false });
        if ((_a = Booking.guest) === null || _a === void 0 ? void 0 : _a.length) {
            Booking.guest.map(async (guest) => {
                const user = this.usersRepository.findUserByEmail(guest.email);
                if (!user) {
                    await this.usersRepository.addUser(Booking.guest);
                }
            });
        }
        const newBooking = new this.bookingModel(Booking);
        await newBooking.save();
        return newBooking.toObject({ versionKey: false });
    }
    async findBookingByID(bookingId) {
        return this.bookingModel.findOne({ _id: bookingId });
    }
    async updateBooking(bookingId, changes) {
        return this.bookingModel.findOneAndUpdate({ _id: bookingId }, changes, {
            new: true,
        });
    }
    async deleteBooking(bookingId) {
        console.log('deleting room ' + bookingId);
        const booking = await this.findBookingByID(bookingId);
        if (booking._id && booking.room.roomNo) {
            const room = await this.roomsRespository.findRoomByID(booking.room.id.toString());
            await this.roomsRespository.updateRoom(room._id, {
                isAvailable: true,
            });
        }
        return this.bookingModel.deleteOne({ _id: bookingId });
    }
};
BookingsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Booking')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        rooms_repository_1.RoomsRepository,
        users_repository_1.UsersRepository])
], BookingsRepository);
exports.BookingsRepository = BookingsRepository;
//# sourceMappingURL=bookings.repository.js.map