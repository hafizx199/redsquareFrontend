import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) {}
  title = 'redsquarefrontend';
  currentProductID  =  this.route.snapshot.params['id'];
  ngOnInit(){
    this.getCartDetails()
    
  }


  //Question 2 Code Solution -------------

  product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  };



      //Add product to cart
      cartItems: Product[] = [];

      addToCart(product: Product): void {
  
        this.cartItems.push(product);
        localStorage.setItem('Cart', JSON.stringify(this.cartItems));
      }
    
   


      //Get cart data
      getCartDetails(){
        const storedItemsString = localStorage.getItem('Cart');
        // Check if the stored string is not null before parsing
        if (storedItemsString !== null) {
          // Parse localStorage of Cart array value
          this.cartItems = JSON.parse(storedItemsString) as Product[];
        }
      }

      clearCart(){
        localStorage.removeItem('Cart');
        this.getCartDetails()
        this.cartItems = []

      }



      




}
