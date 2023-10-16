import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';
import { lastValueFrom } from "rxjs"
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-form-add-update',
  templateUrl: './form-add-update.component.html',
  styleUrls: ['./form-add-update.component.css']
})
export class FormAddUpdateComponent {
  productForm = this.formBuider.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    price: [0],
    imgUrl: [""],
    description: [""]
  })
  product!: IProduct;
  mode: "create" | "update" = "create"
  constructor(
    private formBuider: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
    private routers: Router,
  ) { }

  // async ngOnInit() {
  //   const { _id } = this.router.snapshot.params;
  //   if (_id) {
  //     this.mode = "update";
  //     await this.productService.getProductById(_id).subscribe({
  //         next : ({data} : any) => {this.product = data },
  //         error : (error) => {console.log(error)},
  //         complete : () => {console.log(this.product)}
  //       })
  //       this.productForm.patchValue(this.product as any)
  //   }
  // } 
  async ngOnInit() {
    const { _id } = this.router.snapshot.params;
    console.log(_id);
    if (_id) {
      this.mode = "update";
      try {
        await this.productService.getProductById(_id).subscribe({
          next : ({data} : any) => {this.product = data },
          error : (error) => {console.log(error)},
          complete : () => {this.productForm.patchValue(this.product as any)}
        })
        
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }


  async onHandleSubmit() {
    if (this.mode === "create") {
      try {
        await lastValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
        alert("Thêm thành công")
        this.routers.navigate(['/admin/product'])
      } catch (error: any) {
        console.log(error.message);
      }
    }
    if (this.mode === "update") {
      const product = { _id: this.product._id, ...this.productForm.value }
      try {
        await lastValueFrom(this.productService.editProduct(product as IProduct))
        alert("Cập nhật thành công")
        this.routers.navigate(['/admin/product'])
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }

}
