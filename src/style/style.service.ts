import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Style } from "../models/style.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class StyleService {

  constructor(@InjectModel('Style') private readonly styleModel: Model<Style>){}

  async create(user: Style): Promise<Style> {
    const newStyle = new this.styleModel(user);
    return newStyle.save();
  }

  async findAll(): Promise<Style[]> {
    return this.styleModel.find().exec();
  }

  async findOne(id: string): Promise<Style> {
    return this.styleModel.findById(id).exec();
  }

  async update(id: string, style: Style): Promise<Style> {
    return this.styleModel.findByIdAndUpdate(id, style)
  }

  async delete(id: string): Promise<Style> {
    return this.styleModel.findByIdAndDelete(id);
  }

}
