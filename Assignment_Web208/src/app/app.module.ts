import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductComponent } from './page/admin/product/product.component';
import { AddProductComponent } from './page/admin/add-product/add-product.component';
import { EditProductComponent } from './page/admin/edit-product/edit-product.component';
import { DeleteProductComponent } from './page/admin/delete-product/delete-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
