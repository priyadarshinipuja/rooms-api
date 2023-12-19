import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../types/user';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async addUser(users: Partial<User[]>): Promise<User[]> {
    return this.userModel.insertMany(users);
  }

  async findUserByID(userId: string): Promise<User> {
    return this.userModel.findOne({ _id: userId });
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }

  async findAvailableUsers(): Promise<User[]> {
    return this.userModel.find({ isAvailable: true });
  }

  async updateUser(userId: string, changes: Partial<User>): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id: userId }, changes);
  }

  deleteUser(userId: string) {
    return this.userModel.deleteOne({ _id: userId });
  }
}
