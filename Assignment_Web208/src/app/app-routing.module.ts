import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductComponent } from './page/admin/product/product.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { FormAddUpdateComponent } from './page/admin/form-add-update/form-add-update.component';
import { SignupComponent } from './page/signup/signup.component';
import { SigninComponent } from './page/signin/signin.component';

const routes: Routes = [
  // Base router
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomepageComponent },
      { path: "product", component: ProductPageComponent },
      { path: "product-detail/:_id", component: ProductDetailComponent },
    ]
  },
    
  // Admin router
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductComponent },
      { path: "product/product-add", component: FormAddUpdateComponent },
      { path: "product/product-edit/:_id", component: FormAddUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
