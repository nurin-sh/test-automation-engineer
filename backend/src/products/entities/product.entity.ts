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
        description: 'Sweet and juicy red apples.',
        price: 5
      },
      {
        id: 2,
        name: 'Watermelon',
        description: 'Cooling and refreshing watermelons.',
        price: 10
      },
      {
        id: 3,
        name: 'Pear',
        description: 'Sweet ripe pear.',
        price: 6
      },
      {
        id: 4,
        name: 'Orange',
        description: 'Sweet and juicy oranges.',
        price: 4
      },
      {
        id: 5,
        name: 'Papaya',
        description: 'Amazingly sweet and delicious papayas.',
        price: 8
      },
      {
        id: 6,
        name: 'Banana',
        description: 'Sweet and delicious bananas.',
        price: 3
      },
      {
        id: 7,
        name: 'Mango',
        description: 'Sweet and delicious mangoes.',
        price: 7
      },
      {
        id: 8,
        name: 'Pineapple',
        description: 'Sweet and juicy pineapples.',
        price: 9
      },
      {
        id: 9,
        name: 'Grapes',
        description: 'Sweet and juicy grapes.',
        price: 6
      },
      {
        id: 10,
        name: 'Strawberry',
        description: 'Sweet and delicious strawberries.',
        price: 5
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
