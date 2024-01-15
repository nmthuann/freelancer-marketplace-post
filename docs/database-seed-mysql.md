# How to seed database using TypeORM in a NestJS project

```typescript
// src/db/data-source.ts
import { SeederOptions } from "typeorm-extension";

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + "/modules/**/!(*base).entity{.ts,.js}"],
    logging: false,
    synchronize: false,
    migrationsRun: false,
    migrations: [__dirname + "/migrations/*{.ts,.js}"],
    seeds: ["dist/db/seeds/**/*.js"],
};
```

## Seeding

### Install Library

```shell
npm install typeorm-extension --save
or
yarn add typeorm-extension
```

### src/db/seeds/user.seeder.ts

```typescript
// src/db/seeds/user.seeder.ts
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { User } from "../../resources/users/entities/user.entity";

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<void> {
        await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

        const repository = dataSource.getRepository(User);
        await repository.insert({
            firstName: "Mazedul",
            lastName: "Islam",
        });
    }
}
```

### Add record at package.json

```json
// package.json
{
    "scripts": {
        //
        "seed:run": "ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:run"
    }
}
```

### Let's invoke the script.

> Các tham số khác

    - -d: datasource

> Lệnh đầy đủ:

```shell
 yarn ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:run -d ./src/datasource.ts -n ./src/database/seeds/category.seeder.ts
```

## Factories to generate bulk data

### Create a factory function in src/db/factories/user.factory.ts file.

```typescript
// src/db/factories/user.factory.ts
import { setSeederFactory } from "typeorm-extension";
import { User } from "../../resources/users/entities/user.entity";

export default setSeederFactory(User, (faker) => {
    const user = new User();

    const sexFlag = faker.number.int(1);
    const sex: "male" | "female" = sexFlag ? "male" : "female";

    user.firstName = faker.person.firstName(sex);
    user.lastName = faker.person.lastName(sex);

    return user;
});
```

### add at user.seeder.ts

```typescript
// src/db/seeds/user.seeder.ts
...
export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    ...
    const userFactory = factoryManager.get(User);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(5);
  }
}

```

### we are using SeederFactoryManager instance to get the user factory, we need to update our dataSourceOptions and make it aware of the factory files.

```typescript
// src/db/data-source.ts
...
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  ...
  factories: ['dist/db/factories/**/*.js'],
};
```

### Run the seed command again.

```shell
npm run seed
or
yarn ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:run -d ./src/datasource.ts -n ./src/database/seeds/category.seeder.ts
```

> NOTE: No continues about "Implement seed and factories".

[Link guide](https://blog.mazedulislam.com/how-to-seed-database-using-typeorm-in-a-nestjs-project)

[document typeorm-extension](https://www.npmjs.com/package/typeorm-extension)
