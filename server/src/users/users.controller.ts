import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { ProductsService } from 'src/products/products.service';
import { UserResponseDTO } from './users.models';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('v1/users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
        private readonly productsService: ProductsService
        ) {}


    @Get()
    public async index()
    {
        // todo: pagination needed
        return await (await this.usersService.findAll())
            .map((user) => new UserResponseDTO(user));
    }


    @Get(':id/products')
    public async getUserProdcuts(@Param('id') id: number)
    {
        // todo: pagination needed
        // todo: product response DTO transformer
        return await this.productsService.findByUserId(id);
    }

}
