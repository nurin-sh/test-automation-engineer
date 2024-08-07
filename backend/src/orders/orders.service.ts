import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(private ordersEntity: Order) {}
  create(createOrderDto: CreateOrderDto) {
    return this.ordersEntity.createOrder(createOrderDto);
  }

  findAll() {
    return this.ordersEntity.getOrders();
  }

  findOne(id: number) {
    return this.ordersEntity.getOrderById(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.ordersEntity.updateOrder(id, updateOrderDto);
  }

  remove(id: number) {
    return this.ordersEntity.deleteOrder(id);
  }
}
