import { Component } from '@angular/core';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchText: string = "";
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

  async removeProduct(id: number) {
    const confirm = window.confirm("Bạn muốn xóa chứ?")
    if (confirm) {
      await lastValueFrom(this.productService.removeProduct(id))
      this.products = this.products.filter(item => item._id != id)
    }
  }
}
