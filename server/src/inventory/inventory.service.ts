import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Inventory } from './inventory.models';


@Injectable()
export class InventoryService {

    constructor(
        @InjectRepository(Inventory)
        private repository: Repository<Inventory>,
      ) { }
    
      public async findAll(): Promise<Inventory[]> {
        return await this.repository.find();
      }
    
      public async findOne(id: number): Promise<Inventory> {
        return await this.repository.findOne(id);
      }
    
      public async create(inventory: Inventory): Promise<Inventory> {
        return await this.repository.save(inventory);
      }
    
      public async update(inventory: Inventory): Promise<UpdateResult> {
        return await this.repository.update(inventory.id, inventory);
      }
    
      public async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id);
      }

}
