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
exports.BookingsController = void 0;
const common_1 = require("@nestjs/common");
const bookings_repository_1 = require("../repositories/bookings.repository");
const bookings_1 = require("../types/bookings");
let BookingsController = class BookingsController {
    constructor(bookingsRepository) {
        this.bookingsRepository = bookingsRepository;
    }
    async addBooking(booking) {
        return this.bookingsRepository.addBooking(booking);
    }
    async findAllBookings() {
        return this.bookingsRepository.findAll();
    }
    async findBookingByID(id) {
        console.log('Finding by bookingid', id);
        const room = await this.bookingsRepository.findBookingByID(id);
        if (!room) {
            throw new common_1.NotFoundException('Could not find booking of ' + id);
        }
        return room;
    }
    async updateBooking(bookingId, changes) {
        console.log('updating booking');
        if (changes._id) {
            throw new common_1.BadRequestException("Can't update booking id");
        }
        return this.bookingsRepository.updateBooking(bookingId, changes);
    }
    async deleteBooking(bookingId) {
        return this.bookingsRepository.deleteBooking(bookingId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bookings_1.Booking]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "addBooking", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "findAllBookings", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "findBookingByID", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bookings_1.Booking]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "updateBooking", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "deleteBooking", null);
BookingsController = __decorate([
    (0, common_1.Controller)('bookings'),
    __metadata("design:paramtypes", [bookings_repository_1.BookingsRepository])
], BookingsController);
exports.BookingsController = BookingsController;
//# sourceMappingURL=bookings.controller.js.map