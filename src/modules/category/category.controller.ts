import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
  UseFilters,
} from '@nestjs/common';

import { ICategoryService } from './category.service.interface';
import { CategoryDto } from './dtos/category.dto';
import { CategoryEntity } from './entities/category.entity';
import { BaseController } from '../base/base.generic.controller';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { HttpExceptionFilter } from 'src/common/http/http-exception.filter';

// working with DTO
@Controller('category')
export class CategoryController extends BaseController <CategoryEntity> {
  constructor(
    @Inject('ICategoryService')
    private categoryService: ICategoryService,
  ) {
    super(categoryService)
  }

  @Post('init')
  @UseFilters(HttpExceptionFilter)
  async initializeCategory(){
    try {
      const categoryRoot = await this.categoryService.initializeCategory();
      return { success: true, data: categoryRoot };
    } catch (error) {
      // Check if the error is a BadRequestException
      if (error instanceof BadRequestException) {
        throw error; // Rethrow the exception if it's already a BadRequestException
      } else {
        // Otherwise, create and throw a new BadRequestException
        throw new BadRequestException('Bad Request', error.message);
      }
    }
    
  }

  @Post('create')
  @UseFilters(HttpExceptionFilter)
  async createOne(@Body() category: CreateCategoryDto) {
    console.log('createCategory.......................');
     try {
      const newCategory =  await this.categoryService.createOne(category);
      return { success: true, data: newCategory };
    } catch (error) {
      // Check if the error is a BadRequestException
      if (error instanceof BadRequestException) {
        throw error; // Rethrow the exception if it's already a BadRequestException
      } else {
        // Otherwise, create and throw a new BadRequestException
        throw new BadRequestException('Bad Request', error.message);
      }
    }
    
  }
  
}