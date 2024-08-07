import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get('http://localhost:3000/orders');
  }

  getOrderById(id: number) {
    return this.http.get(`http://localhost:3000/orders/${id}`);
  }

  createOrder(order: any) {
    return this.http.post('http://localhost:3000/orders', order);
  }

  updateOrder(id: number, order: any) {
    return this.http.put(`http://localhost:3000/orders/${id}`, order);
  }

  deleteOrder(id: number) {
    return this.http.delete(`http://localhost:3000/orders/${id}`);
  }
  
}
