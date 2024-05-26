// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { StyleModule } from './style/style.module';
import { ClubModule } from './club/club.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://stratsrvyt:wJHOW6OmvENfQVUp@nest.0fjvayk.mongodb.net/spotnight'),
    UserModule,
    StyleModule,
    EventModule,
    ClubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
