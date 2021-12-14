import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('v1/inventory')
export class InventoryController {}
