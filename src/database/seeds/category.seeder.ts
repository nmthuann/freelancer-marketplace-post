// // src/db/seeds/CategorySeeder.ts

import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';


export default class CategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // factoryManager: SeederFactoryManager,
  ): Promise<void> {
   await dataSource.query('ALTER TABLE `category` AUTO_INCREMENT = 1;');

    const repository = dataSource.getRepository(CategoryEntity);
    await repository.insert({
      category_name: 'Root',
      left_value: 1,
      right_value: 2,
    });
  }
  
}


//        await transactionalEntityManager.query('ALTER TABLE `category` AUTO_INCREMENT = 1;');




// public async run(dataSource: DataSource,
//      factoryManager: SeederFactoryManager,): Promise<void> {
//     try {
//       const connection = dataSource.manager.connection;

//       await connection.transaction(async (transactionalEntityManager) => {
//         const categoryRepository: Repository<CategoryEntity> = transactionalEntityManager.getRepository(
//           CategoryEntity,
//         );

//         await transactionalEntityManager.query('ALTER TABLE `category` AUTO_INCREMENT = 1;');

//         // Seed categories using the factory
//         const categoriesToSave = factoryManager.get(CategoryEntity);

//         await transactionalEntityManager.save(categoriesToSave);

//         // Commit the transaction
//       });
//     } catch (error) {
//       console.error('Error seeding database::::', error);
//       throw error;
//     }
//   }