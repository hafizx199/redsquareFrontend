import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzbuzzComponent } from './Question1/fizzbuzz/fizzbuzz.component'; 
import { HomePageProductComponent } from './Question2/home-page-product/home-page-product.component';
import { DetailProductComponent } from './Question2/detail-product/detail-product.component'; 
import { MyCartComponent } from './Question2/my-cart/my-cart.component'; 


const routes: Routes = [
  { path: '', component: FizzbuzzComponent },
  { path: 'products', component: HomePageProductComponent },
  { path: 'detail/:id', component: DetailProductComponent },
  { path: 'cart', component: MyCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
