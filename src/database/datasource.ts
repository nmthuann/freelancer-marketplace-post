import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

dotenv.config();

/**
 * new DataSource(options: DataSourceOptions): DataSource;
 * SeederOptions?
 */
export const AppDataSource: DataSourceOptions & SeederOptions =  ({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/!(*base).entity.js'], ///**/!(*base).entity.js
  migrations: ['dist/**/migrations/*.js'], // //__dirname + '/**/migrations/*.js'
  logging: false,
  synchronize: false,
  migrationsRun: false,
  seeds: ['dist/src/databaseb/seeds/**/*.js'],
   factories: ['dist/src/databaseb/factories/**/*.js'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
})
