import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppDataSource } from './database/datasource';
dotenv.config();

@Module({
  imports: [  
    TypeOrmModule.forRoot(AppDataSource),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
