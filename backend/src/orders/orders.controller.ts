import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    try {
      return this.ordersService.findAll();  
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.ordersService.findOne(+id);  
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error.message);
    }
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    try {
      return this.ordersService.update(+id, updateOrderDto);  
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error.message);
    }
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.ordersService.remove(+id);  
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error.message);
    }
    
  }
}
