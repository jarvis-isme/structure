import * as dotenv from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  name: 'default',
  type: 'mysql',
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  synchronize: false,
  maxQueryExecutionTime: 300,
  entities: ['dist/entities/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'src/migration',
  // },
  logging: ['error', 'warn', 'migration'],
  logger: 'file',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
