import { RoomsRepository } from '../repositories/rooms.repository';
import { Room } from '../types/room';
export declare class RoomController {
    private roomsRespository;
    constructor(roomsRespository: RoomsRepository);
    addRoom(room: Room): Promise<Room>;
    findAllRooms(): Promise<Room[]>;
    findAvailableRooms(): Promise<Room[]>;
    findRoomByID(id: string): Promise<Room>;
    updateRoom(roomId: string, changes: Room): Promise<Room>;
    deleteRoom(roomId: string): Promise<import("mongodb").DeleteResult>;
}
