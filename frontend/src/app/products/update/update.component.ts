import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CreateProduct } from '../products.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  productId = parseInt(this.route.snapshot.paramMap.get('productId') as string)

  constructor(private router: Router, private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onUpdate() {
    const valid = this.updateProductForm.valid;
    if (!valid) {
      alert('Invalid input');
      return;
    }
    this.productService.updateProduct(this.productId, this.updateProductForm.value as unknown as CreateProduct).subscribe(() => {
      this.router.navigate(['/products/list']);
    })
    
  }

}
