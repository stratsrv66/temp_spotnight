import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from "../models/user.model";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    async create(@Body() category: User): Promise<User> {
        return this.userService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() category: User): Promise<User> {
        return this.userService.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
        return this.userService.delete(id);
    }
}
