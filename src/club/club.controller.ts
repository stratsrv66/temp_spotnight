import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClubService } from './club.service';
import {Club} from "../models/club.model";

@Controller('/club')
export class ClubController {
    constructor(private readonly clubService: ClubService) {}

    @Get()
    async getAll(): Promise<Club[]> {
        return this.clubService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Club> {
        return this.clubService.findOne(id);
    }

    @Post()
    async create(@Body() category: Club): Promise<Club> {
        return this.clubService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() category: Club): Promise<Club> {
        return this.clubService.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Club> {
        return this.clubService.delete(id);
    }
}
