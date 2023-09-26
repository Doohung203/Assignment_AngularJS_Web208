import { Component } from '@angular/core';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchText: string = "";
  products: IProduct[] = []

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data },
      error: (error) => { console.log("error", error.message); },
      complete: () => { console.log("GetAll Data success"); }
    })
  }

  removeProduct(id: number | string) {
    const confirm = window.confirm("Bạn muốn xóa chứ?")
    if (confirm) {
        this.products = this.products.filter(item => item.id != id)
    }
  }
}
