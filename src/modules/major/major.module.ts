import { Module } from '@nestjs/common';
import { MajorController } from './major.controller';

@Module({
  controllers: [MajorController]
})
export class MajorModule {}
