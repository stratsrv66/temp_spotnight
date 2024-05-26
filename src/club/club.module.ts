import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ClubSchema} from "../schemas/club.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Club', schema: ClubSchema }])],
  providers: [ClubService],
  controllers: [ClubController]
})
export class ClubModule {}
