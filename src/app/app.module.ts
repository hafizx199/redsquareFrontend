import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


import { FizzbuzzComponent } from './Question1/fizzbuzz/fizzbuzz.component';
import { HomePageProductComponent } from './Question2/home-page-product/home-page-product.component';
import { DetailProductComponent } from './Question2/detail-product/detail-product.component';
import { MyCartComponent } from './Question2/my-cart/my-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    HomePageProductComponent,
    DetailProductComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
