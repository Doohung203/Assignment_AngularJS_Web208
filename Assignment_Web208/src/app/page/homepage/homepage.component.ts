import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService  , private router : Router) {
    this.productService.getAll().subscribe({
      next: (data: any) => {
        this.products = data.data
      },
      error: (error) => { console.log("error", error.message); },
      complete: () => { console.log("GetAll Data success"); }
    })
  }
  

}
