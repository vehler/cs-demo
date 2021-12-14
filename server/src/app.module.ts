import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { InventoryModule } from './inventory/inventory.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './common/auth/auth.module';

import 'dotenv/config';

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const DatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: DB_HOST,
  port: 3306,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  autoLoadEntities: true,
  entities: ['dist/**/*.models{.ts,.js}'],
  synchronize: false,
});

@Module({
  imports: [DatabaseModule, UsersModule, ProductsModule, InventoryModule, OrdersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
