/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
    deleteRoom(roomId: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, any, Room> & Room & Required<{
        _id: string;
    }>, {}, Room>;
}
