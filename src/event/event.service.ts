import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Event } from "../models/event.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class EventService {

  constructor(@InjectModel('Event') private readonly eventModel: Model<Event>){}

  async create(user: Event): Promise<Event> {
    const newEvent = new this.eventModel(user);
    return newEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    return this.eventModel.findById(id).exec();
  }

  async update(id: string, event: Event): Promise<Event> {
    return this.eventModel.findByIdAndUpdate(id, event)
  }

  async delete(id: string): Promise<Event> {
    return this.eventModel.findByIdAndDelete(id);
  }

}
