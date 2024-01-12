import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
} from '@nestjs/common';

import { ICategoryService } from './category.service.interface';

import { DeleteResult } from 'typeorm';
import { CategoryDto } from './category.dto';
import { CategoryEntity } from './entities/category.entity';
import { BaseController } from '../base/base.controller';

// working with DTO
@Controller('category')
export class CategoryController extends BaseController <CategoryEntity> {
  constructor(
    @Inject('ICategoryService')
    private categoryService: ICategoryService,
  ) {
    super(categoryService)
  }

  
}


// @Post('create')
//   async createCategory(@Body() category: CategoryDto): Promise<CategoryEntity> {
//     console.log('createCategory');
//     return await this.categoryService.createOne(category);
//   }

//   @Put('update/:category_id')
//   async updateCategoryById(
//     @Param('category_id') id: number,
//     @Body() categoryDto: CategoryDto,
//   ): Promise<CategoryEntity> {
//     console.log('updateCategory');
//     return this.categoryService.updateOneById(id, categoryDto);
//   }

//   @Delete('delete/:category_id')
//   async deleteCategoryById(
//     @Param('category_id') id: number,
//   ): Promise<DeleteResult> {
//     return await this.categoryService.deleteOneById(id);
//   }

//   @Get('get-categories')
//   async getCategories(): Promise<CategoryEntity[]> {
//     return await this.categoryService.getAll();
//   }


//   @Get(':id')
//   async getCategory(@Param('id') id: number): Promise<CategoryEntity> {
//     return await this.categoryService.getOneById(id);
//   }