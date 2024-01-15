import { UsersRepository } from "../repositories/users.repository";
import { User } from "../types/user";
export declare class UsersController {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    addUser(users: User[]): Promise<User[]>;
    findAllUsers(): Promise<User[]>;
    findUserByID(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    updateUser(userId: string, changes: User): Promise<User>;
    deleteUser(userId: string): Promise<import("mongodb").DeleteResult>;
}
