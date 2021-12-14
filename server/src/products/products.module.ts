import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from 'src/inventory/inventory.models';
import { ProductsController } from './products.controller';
import { Product } from './products.models';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Inventory])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
