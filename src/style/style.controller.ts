import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StyleService } from './style.service';
import {Style} from "../models/style.model";

@Controller('/style')
export class StyleController {
    constructor(private readonly styleService: StyleService) {}

    @Get()
    async getAll(): Promise<Style[]> {
        return this.styleService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Style> {
        return this.styleService.findOne(id);
    }

    @Post()
    async create(@Body() category: Style): Promise<Style> {
        return this.styleService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() category: Style): Promise<Style> {
        return this.styleService.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Style> {
        return this.styleService.delete(id);
    }
}
