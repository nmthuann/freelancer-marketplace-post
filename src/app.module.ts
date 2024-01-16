import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppDataSource } from './database/datasource';
import { CategoryModule } from './modules/category/category.module';
dotenv.config();

@Module({
  imports: [  
    TypeOrmModule.forRoot(AppDataSource.options),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
