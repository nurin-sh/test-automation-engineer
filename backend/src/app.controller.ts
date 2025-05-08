import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './products/dto/create-product.dto';

@Controller('api/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  createProduct(@Body() createProductDto: CreateProductDto) {
    console.log('Product created:', createProductDto);

    return {
      message: 'Product created',
      product: createProductDto,
    };
  }

}

