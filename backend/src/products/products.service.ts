import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(private productEntity: Product) {}

  create(createProductDto: CreateProductDto) {
    return this.productEntity.createProduct(createProductDto);
  }

  findAll() {
    return this.productEntity.getProducts();
  }

  findOne(id: number) {
    return this.productEntity.getProductById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productEntity.updateProduct(id, updateProductDto);
  }

  remove(id: number) {
    return this.productEntity.deleteProduct(id);
  }
}
