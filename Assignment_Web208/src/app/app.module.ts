import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductComponent } from './page/admin/product/product.component';
import { HttpClientModule} from '@angular/common/http';
import { SearchBoxPipe } from './search-box.pipe';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { FormAddUpdateComponent } from './page/admin/form-add-update/form-add-update.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './page/signup/signup.component';
import { SigninComponent } from './page/signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    ProductComponent,
    SearchBoxPipe,
    AdminLayoutComponent,
    BaseLayoutComponent,
    FormAddUpdateComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
