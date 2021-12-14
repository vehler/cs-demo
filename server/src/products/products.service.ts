import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from './products.models';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    public async findAll(): Promise<Product[]> {
         // todo: implememnt pagination
        return await this.productRepository.find();
    }

    public async findOne(id: number): Promise<Product> {
        return await this.productRepository.findOne(id);
    }

    public async findByUserId(userId: number): Promise<Product[]> {
        // todo: implememnt pagination
        return await this.productRepository.find({
            relations: ['inventory'],
            where: { admin_id: userId }
        });
    }

    public async create(product: Product): Promise<Product> {
        return await this.productRepository.save(product);
    }

    public async update(product: Product): Promise<UpdateResult> {
        return await this.productRepository.update(product.id, product);
    }

    public async delete(id: number): Promise<DeleteResult> {
        return await this.productRepository.delete(id);
    }

}
