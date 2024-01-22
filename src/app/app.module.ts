import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


import { FizzbuzzComponent } from './Question1/fizzbuzz/fizzbuzz.component';
import { HomePageProductComponent } from './Question2/home-page-product/home-page-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    HomePageProductComponent
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
