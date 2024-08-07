import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, Order],
})
export class OrdersModule {}
