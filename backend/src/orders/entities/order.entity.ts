import { Product } from "src/products/entities/product.entity";
import { CreateOrderDto } from "../dto/create-order.dto";
import { OrderInterface } from "../dto/order.interface";
import { UpdateOrderDto } from "../dto/update-order.dto";
import { NotFoundException } from "@nestjs/common";

export class Order {
    private orders: OrderInterface[] = [];

  constructor() {
    this.orders = [];
  }

  createOrder(order: CreateOrderDto) {
    const ids = this.orders.map(order => order.id).sort((a, b) => a - b).reverse();
    console.log(ids);
    const newId = ids.length === 0 ? 1 : ids[0] + 1;
    this.orders.push({...order, id: newId, total: order.price * order.quantity});
    return order;
  }
  
  getOrders() {
    return this.orders;
  }

  getOrderById(id: number) {
    const order = this.orders.find(order => order.id === id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    } 
    return order;
  }

  updateOrder(id: number, order: UpdateOrderDto) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    this.orders[index] = { ...this.orders[index], ...order };
    return this.orders[index];
  }

  deleteOrder(id: number) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    this.orders.splice(index, 1);
    return this.orders;
  }
}
