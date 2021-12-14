import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './users.models';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email });
  }

  public async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
