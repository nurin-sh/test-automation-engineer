import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  orders = this.ordersService.getOrders();

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  deleteOrder(id: number) {
    this.ordersService.deleteOrder(id).subscribe(() => {
      this.orders = this.ordersService.getOrders();
    });
  }

}
