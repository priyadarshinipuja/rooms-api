import { Model } from 'mongoose';
import { Room } from '../types/room';
export declare class RoomsRepository {
    private roomModel;
    constructor(roomModel: Model<Room>);
    findAll(): Promise<Room[]>;
    addRoom(room: Partial<Room>): Promise<Room>;
    findRoomByID(roomId: string): Promise<Room>;
    findRoomByRoomNO(roomNo: number): Promise<Room>;
    findAvailableRooms(): Promise<Room[]>;
    updateRoom(roomId: string, changes: Partial<Room>): Promise<Room>;
    deleteRoom(roomId: string): Promise<import("mongodb").DeleteResult>;
}
