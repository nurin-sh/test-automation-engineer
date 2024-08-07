import { Component, OnInit } from '@angular/core';
import { Product } from '../products.interface';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Observable<Array<Product>> = this.productService.getProducts();

  constructor(private productService: ProductsService) {
    this.products
  }

  ngOnInit(): void {
    this.products.subscribe(console.log)
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.productService.getProducts();
    });
  }

}
