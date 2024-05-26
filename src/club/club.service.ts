import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Club } from "../models/club.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ClubService {

  constructor(@InjectModel('Club') private readonly clubModel: Model<Club>){}

  async create(user: Club): Promise<Club> {
    const newClub = new this.clubModel(user);
    return newClub.save();
  }

  async findAll(): Promise<Club[]> {
    return this.clubModel.find().exec();
  }

  async findOne(id: string): Promise<Club> {
    return this.clubModel.findById(id).exec();
  }

  async update(id: string, club: Club): Promise<Club> {
    return this.clubModel.findByIdAndUpdate(id, club)
  }

  async delete(id: string): Promise<Club> {
    return this.clubModel.findByIdAndDelete(id);
  }

}
