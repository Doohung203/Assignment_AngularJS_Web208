import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'autoprefixer';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product !: IProduct;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    const id: number = +this.route.snapshot.params['id'];
    if(id){
      this.productService.getProductById(id).subscribe(
        (data: IProduct) => {
          this.product = data;
        },
        (error: any) => {
          console.error(error.message);
          // Xử lý lỗi ở đây nếu cần
        }
      )
    }
  }
}
