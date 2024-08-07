import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CreateProduct } from '../products.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {

  }

  onCreate() {
    const valid = this.createProductForm.valid;
    if (!valid) {
      alert('Invalid input');
      return;
    }
    this.productService.createProduct(this.createProductForm.value as unknown as CreateProduct).subscribe(() => {
      this.router.navigate(['/products/list']);
    })
    
  }

}
