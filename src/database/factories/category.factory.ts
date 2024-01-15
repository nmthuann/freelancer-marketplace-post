// src/db/seeds/factories/CategoryFactory.ts

import { setSeederFactory } from 'typeorm-extension';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';

export default setSeederFactory(CategoryEntity, async () => {
  const categories = [
    {
      category_name: 'Root',
      left_value: 1,
      right_value: 12,
    },
    {
      category_name: 'Graphic & Design',
      left_value: 2,
      right_value: 3,
    },
    {
      category_name: 'Digital Marketing',
      left_value: 3,
      right_value: 4,
    },
    {
      category_name: 'Programming & Tech',
      left_value: 5,
      right_value: 6,
    },
    {
      category_name: 'Writing & Translation',
      left_value: 7,
      right_value: 8,
    },
    {
      category_name: 'Music & Audio',
      left_value: 9,
      right_value: 10,
    },
    // Add more categories as needed
  ];

  // Delay to simulate asynchronous behavior (if needed)
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Choose one entity from the array
  const selectedCategoryData = categories[Math.floor(Math.random() * categories.length)];

  const category = new CategoryEntity();
  category.category_name = selectedCategoryData.category_name;
  category.left_value = selectedCategoryData.left_value;
  category.right_value = selectedCategoryData.right_value;

  return category;
});

