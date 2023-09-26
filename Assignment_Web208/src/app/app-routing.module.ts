import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductComponent } from './page/admin/product/product.component';
import { AddProductComponent } from './page/admin/add-product/add-product.component';
import { EditProductComponent } from './page/admin/edit-product/edit-product.component';

const routes: Routes = [
  {path : "" , component : HomepageComponent},
  {path : "product" , component : ProductPageComponent},
  {path : "product-detail/:id" , component : ProductDetailComponent},
  {path : "admin/product" , component : ProductComponent},
  {path : "admin/add-product" , component : AddProductComponent},
  {path : "admin/edit-product" , component : EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
