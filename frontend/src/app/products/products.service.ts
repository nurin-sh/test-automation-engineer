import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProduct, Product } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:3000/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  createProduct(product: CreateProduct): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  updateProduct(id: number, product: CreateProduct): Observable<Product> {
    return this.http.put<Product>(`http://localhost:3000/products/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
