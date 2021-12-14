import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { OrdersService } from './orders.service';

@UseGuards(JwtAuthGuard)
@Controller('v1/orders')
export class OrdersController {

    constructor(private readonly orderService: OrdersService){}

    @Get()
    public getAll(){
        return 'all products';
    }

}
