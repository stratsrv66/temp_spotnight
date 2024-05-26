import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventService } from './event.service';
import {Event} from "../models/event.model";

@Controller('/event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    async getAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Event> {
        return this.eventService.findOne(id);
    }

    @Post()
    async create(@Body() category: Event): Promise<Event> {
        return this.eventService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() category: Event): Promise<Event> {
        return this.eventService.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Event> {
        return this.eventService.delete(id);
    }
}
