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
  constructor(private productsService: ProductService  , private router : Router) {
    this.productsService.getAll().subscribe({
      next: (data) => { this.products = data },
      error: (error) => { console.log("error", error.message); },
      complete: () => { console.log("GetAll Data success"); }
    })
  }
  

}
