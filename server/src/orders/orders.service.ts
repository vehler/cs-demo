import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Order } from './orders.models';

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
      ) { }
    
      public async findAll(): Promise<Order[]> {
        return await this.orderRepository.find();
      }
    
      public async findOne(id: number): Promise<Order> {
        return await this.orderRepository.findOne(id);
      }
    
      public async create(order: Order): Promise<Order> {
        return await this.orderRepository.save(order);
      }
    
      public async update(order: Order): Promise<UpdateResult> {
        return await this.orderRepository.update(order.id, order);
      }
    
      public async delete(id: number): Promise<DeleteResult> {
        return await this.orderRepository.delete(id);
      }


}
