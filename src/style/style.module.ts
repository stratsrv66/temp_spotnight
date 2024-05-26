import { Module } from '@nestjs/common';
import { StyleService } from './style.service';
import { StyleController } from './style.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {StyleSchema} from "../schemas/style.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Style', schema: StyleSchema }])],
  providers: [StyleService],
  controllers: [StyleController]
})
export class StyleModule {}
