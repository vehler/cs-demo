import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.models';
import { ProductsService } from 'src/products/products.service';
import { Product } from 'src/products/products.models';
import { Inventory, InventoryDTO } from 'src/inventory/inventory.models';

@Module({
  imports: [TypeOrmModule.forFeature([User, Product, Inventory])],
  providers: [UsersService, ProductsService],
  controllers: [UsersController]
})
export class UsersModule {}
