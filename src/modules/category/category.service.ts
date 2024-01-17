import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import {  DataSource, Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { ICategoryService } from './category.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { CategoryExceptionErrors } from 'src/common/constants/errors/category.error';
// import { AppDataSource } from 'src/database/datasource';

@Injectable()
export class CategoryService
  extends BaseService<CategoryEntity>
  implements ICategoryService
{
 
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
     private dataSource: DataSource
  ) {

    
    super(categoryRepository);
  }
  async initializeCategory(): Promise<CategoryEntity> {
    const checkEmpty =  await this.categoryRepository.find();
    console.log(checkEmpty)
    if(checkEmpty.length !== 0){
      throw new Error(CategoryExceptionErrors.CATEGORY_NOT_EMPTY);
    }
    const rootCategory = this.categoryRepository.save({
        category_name: 'Root',
        left_value: 1,
        right_value: 2,
    });
    return rootCategory;
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
    const isCategoryTableEmpty = await this.categoryRepository.findOne({
      where:{
        category_id: data.category_parent_id
      }
    });
    if(!isCategoryTableEmpty){
      throw new Error('Danh sách rỗng.')
    }

    const { category_name, category_parent_id } = data;
    const parentCategory = await this.categoryRepository.findOne({
      where: { category_id: category_parent_id },
    });

    if (!parentCategory) {
      throw new NotFoundException('Không tìm thấy Category Parent');
    }

    

    // const connection = this.dataSource.manager;
    return await this.dataSource.manager.transaction(
      "SERIALIZABLE",
      async (transactionalEntityManager) => {
     
      await transactionalEntityManager.query(
        `UPDATE categories
        SET right_value = right_value + 2 
        WHERE right_value >= ?`,
        [parentCategory.right_value],
      );

      // Increase left_value of all nodes with left_value greater than parentCategory.right_value
      await transactionalEntityManager.query(
        `UPDATE categories
        SET left_value = left_value + 2 
        WHERE left_value > ?`,
        [parentCategory.right_value],
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
  }

}



 // execute queries using transactionalEntityManager
      // await transactionalEntityManager.update(
      //   CategoryEntity,
      //   { right_value: { $gte: parentCategory.right_value } },
      //   { right_value: () => '"right_value" + 2' },
      // );

      // // Increase left_value of all parent nodes > left_value of the current node
      // await transactionalEntityManager.update(
      //   CategoryEntity,
      //   { left_value: { $gt: parentCategory.right_value } },
      //   { left_value: () => '"left_value" + 2' },
      // );