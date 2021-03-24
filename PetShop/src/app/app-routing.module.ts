import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLsitComponent } from './product-lsit/product-lsit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
  path: "", component: ProductLsitComponent
  },
  {
  path: "productDetail/:productId", component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
