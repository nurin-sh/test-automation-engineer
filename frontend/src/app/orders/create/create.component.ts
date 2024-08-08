import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { ProductsService } from 'src/app/products/products.service';
import { Product } from 'src/app/products/products.interface';
import { Observable } from 'rxjs';
import { CreateOrder } from '../orders.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productId: number =  parseInt(this.route.snapshot.paramMap.get('productId') as string)
  product: Observable<Product> = this.productService.getProductById(this.productId);

  createOrderForm = new FormGroup({
    product_id: new FormControl(this.productId, Validators.required),
    product_name: new FormControl(''),
    product_description: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl('', Validators.required),
    updated_at: new FormControl(''),
    created_at: new FormControl(''),
  });

  constructor(private router: Router, private productService: ProductsService, private orderService: OrdersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product.subscribe(product => this.populateProduct(product));

  }

  populateProduct(product: Product) {
      this.createOrderForm.patchValue({
        product_id: product.id,
        product_name: product.name,
        price: product.price,
        product_description: product.description,
      })

      this.createOrderForm.get('product_name')?.disable();
      this.createOrderForm.get('product_description')?.disable();
      this.createOrderForm.get('price')?.disable();
  }

  onCreate() {
    const valid = this.createOrderForm.valid;
    if (!valid) {
      alert('Please fill all the required fields to create an order');
      return;
    }
    this.createOrderForm.get('product_name')?.enable();
    this.createOrderForm.get('price')?.enable();
    this.createOrderForm.get('updated_at')?.setValue(new Date().toISOString());
    this.createOrderForm.get('created_at')?.setValue(new Date().toISOString());
    this.orderService.createOrder(this.createOrderForm.value as unknown as CreateOrder).subscribe(() => {
      this.router.navigate(['/orders/list']);
    })
    
  }

}
