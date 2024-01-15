import {
  Body,
  Controller,
  Get,
  Param,
  NotFoundException,
  BadRequestException,
  Post,
  Put,
  Delete,
} from "@nestjs/common";

import { UsersRepository } from "../repositories/users.repository";
import { User } from "../types/user";

@Controller("users")
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Post("create")
  //@UseGuards(AdminGuard)
  async addUser(@Body() users: User[]): Promise<User[]> {
    console.log("creating new user", users);

    return this.usersRepository.addUser(users);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    console.log("usersRepository", this.usersRepository);
    return this.usersRepository.findAll();
  }

  @Get(":id")
  async findUserByID(@Param("id") id: string) {
    console.log("Finding by id", id);

    const user = await this.usersRepository.findUserByID(id);

    if (!user) {
      throw new NotFoundException("Could not find user of " + id);
    }

    return user;
  }
  @Get(":email")
  async findUserByEmail(@Param("email") email: string) {
    console.log("Finding by id", email);

    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new NotFoundException("Could not find user of " + email);
    }

    return user;
  }

  @Put(":id")
  //@UseGuards(AdminGuard)
  async updateUser(
    @Param("id") userId: string,
    @Body() changes: User
  ): Promise<User> {
    console.log("updating user");

    if (changes._id) {
      throw new BadRequestException("Can't update user id");
    }

    return this.usersRepository.updateUser(userId, changes);
  }

  @Delete(":id")
  //@UseGuards(AdminGuard)
  async deleteUser(@Param("id") userId: string) {
    console.log("deleting user " + userId);

    return this.usersRepository.deleteUser(userId);
  }
}
