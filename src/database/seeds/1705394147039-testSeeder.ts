import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class TestSeeder1705394147039 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
await dataSource.query('ALTER TABLE `category` AUTO_INCREMENT = 1;');

    const repository = dataSource.getRepository(CategoryEntity);
    await repository.insert({
      category_name: 'Root',
      left_value: 1,
      right_value: 2,
    });
    }
}
