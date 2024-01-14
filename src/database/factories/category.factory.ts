// src/db/factories/category.factory.ts
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { setSeederFactory } from 'typeorm-extension';


export default setSeederFactory(CategoryEntity, (faker) => {
  const categoryEntity = new CategoryEntity();

  const genderFlag = faker.number.int(1);
  const gender: 'male' | 'female' = genderFlag ? 'male' : 'female';

  categoryEntity.category_name = faker.person.firstName(gender);
  categoryEntity.category_name = faker.person.lastName(gender);

  return categoryEntity;
});
