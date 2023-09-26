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
  constructor(
    private productsService: ProductService,
    private router : Router
    ) {
    this.productsService.getAll().subscribe({
      next: (data) => { this.products = data },
      error: (error) => { console.log("error", error.message); },
      complete: () => { console.log("GetAll Data success"); }
    })
  }
  onShowDetail(id : number){
    console.log(id)
  }
  onClick(id : number){
    this.router.navigate(['/product-detail', id])
  }

}
