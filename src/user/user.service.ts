import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { User } from "../models/user.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user)
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }

}
