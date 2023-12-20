import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category/category.module';
import { CategoryEntity } from './modules/category/category.entity';
import { MajorEntity } from './modules/major/entities/major.entity';
import { MajorAttributeEntity } from './modules/major/entities/major.attribute.entity';
import { MajorAttributeValueEntity } from './modules/major/entities/major.value.enity';
import { PostEntity } from './modules/post/entities/post.entity';
import { PackageEntity } from './modules/post/entities/package.entity';
import { ReviewEntity } from './modules/review/review.entity';
import { ImageEntity } from './modules/post/entities/image.entity';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type:'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password:  process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [
          CategoryEntity,
          MajorEntity,
          MajorAttributeEntity,
          MajorAttributeValueEntity,
          ImageEntity,
          PostEntity,
          PackageEntity,
          ReviewEntity,
        ],
        synchronize: false, // fix: false -> migration
      }),
      // CategoryModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
