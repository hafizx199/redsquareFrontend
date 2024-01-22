import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzbuzzComponent } from './Question1/fizzbuzz/fizzbuzz.component'; 
import { HomePageProductComponent } from './Question2/home-page-product/home-page-product.component';


const routes: Routes = [
  { path: '', component: FizzbuzzComponent },
  { path: 'products', component: HomePageProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
