import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('v1/products')
export class ProductsController {}
