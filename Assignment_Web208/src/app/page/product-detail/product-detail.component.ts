import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input () products! : IProduct[];
  @Output () ShowDetail = new EventEmitter<number>()
  onClick(id : any){
    this.ShowDetail.emit(id)
  }

}
