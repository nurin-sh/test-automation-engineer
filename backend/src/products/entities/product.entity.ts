import { NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { ProductsInterface } from "../dto/products.interface";
import { UpdateProductDto } from "../dto/update-product.dto";

export class Product {

  private products: ProductsInterface[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Red Apple',
        description: 'Description 1',
        price: 5
      },
      {
        id: 2,
        name: 'Watermelon',
        description: 'Description 2',
        price: 10
      },
      {
        id: 3,
        name: 'Pear',
        description: 'Description 3',
        price: 6
      },
      {
        id: 4,
        name: 'Orange',
        description: 'Description 4',
        price: 4
      },
      {
        id: 5,
        name: 'Papaya',
        description: 'Description 5',
        price: 8
      }
    ];

  }

  createProduct(product: CreateProductDto) {
    const largestId = Math.max(...this.products.map(product => product.id));
    const newId = largestId + 1;
    this.products.push({...product, id: newId });
    return product;
  }
  
  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  updateProduct(id: number, product: UpdateProductDto) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    this.products[index] = { ...this.products[index], ...product };
    return this.products[index];
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    this.products.splice(index, 1);
    return this.products;
  }

}
