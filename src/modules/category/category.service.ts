import { Injectable } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { ICategoryService } from './category.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.abstract';

@Injectable()
export class CategoryService
  extends BaseService<CategoryEntity>
  implements ICategoryService
{
  constructor(
    @InjectRepository(CategoryEntity)
    categoryRepository: Repository<CategoryEntity>,
  ) {
    super(categoryRepository);
  }
}