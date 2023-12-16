import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.abstract';
import { MajorEntity } from './entities/major.entity';
import { IMajorService } from './major.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MajorService extends BaseService<MajorEntity> implements IMajorService{
    constructor(
    @InjectRepository(MajorEntity)
    majorRepository: Repository<MajorEntity>,
  ) {
    super(majorRepository);
  }
}
