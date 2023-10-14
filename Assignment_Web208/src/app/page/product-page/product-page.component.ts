import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().subscribe({
      next: (data: any) => {
        this.products = data.data
      },
      error: (error) => { console.log("error", error.message); },
      complete: () => { console.log("GetAll Data success"); }
    })
  }


}
