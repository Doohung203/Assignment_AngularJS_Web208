import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'interfaces/product';
import { ProductService } from 'src/app/service/product.service';
import { lastValueFrom } from "rxjs"

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
    code: [""]
  })
  product!: IProduct;
  mode: "create" | "update" = "create"
  constructor(
    private formBuider: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
    private routers: Router,
  ) { }

  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    if (id) {
      this.mode = "update";
      try {
        this.product = await lastValueFrom(this.productService.getProductById(id))
        this.productForm.patchValue(this.product as any);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }

  async onHandleSubmit() {
    // if(this.productForm.valid) return;
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
