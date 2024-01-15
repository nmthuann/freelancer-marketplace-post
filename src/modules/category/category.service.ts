import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import {  DataSource, Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { ICategoryService } from './category.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.abstract';
import { CreateCategoryDto } from './dtos/create-category.dto';
// import { AppDataSource } from 'src/database/datasource';

@Injectable()
export class CategoryService
  extends BaseService<CategoryEntity>
  implements ICategoryService
{
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    private dataSource: DataSource,
  ) {

    super(categoryRepository);
  }

  /**
   * 
   * @param data : {category_name, category_parent_id}
   * @returns data: CategoryEntity
   * pseudocode
   * - check ${category_parent_id} exist?
   * - increase right_value of all parent node >= right_value of current node.
   * - increase left_value of all parent node >= left_value of current node.
   * - add new a child node  between  left & right of parrent node.
   */
  async createOne(data: CreateCategoryDto): Promise<CategoryEntity> {
    // Check if the parent category exists
    const { category_name, category_parent_id } = data;
    const parentCategory = await this.categoryRepository.findOne({
      where: { category_id: data.category_parent_id },
    });

    if (!parentCategory) {
      throw new NotFoundException('sss');
    }

    // create transaction
    // const updateCategory =   

    const connection = this.dataSource.manager;
    return await connection.transaction(async (transactionalEntityManager) => {
      // execute queries using transactionalEntityManager
      await transactionalEntityManager.update(
        CategoryEntity,
        { right_value: { $gte: parentCategory.right_value } },
        { right_value: () => '"right_value" + 2' },
      );

      // Increase left_value of all parent nodes > left_value of the current node
      await transactionalEntityManager.update(
        CategoryEntity,
        { left_value: { $gt: parentCategory.right_value } },
        { left_value: () => '"left_value" + 2' },
      );

      const newCategory = this.categoryRepository.create({
        category_name,
        left_value: parentCategory.right_value,
        right_value: parentCategory.right_value + 1,
        // category_parent: parentCategory,
      });


      try {
        await transactionalEntityManager.save(CategoryEntity, newCategory);
      } catch (error) {
        throw new ConflictException('Error creating category');
      }

      return newCategory;
    })
    // return;
  }

}