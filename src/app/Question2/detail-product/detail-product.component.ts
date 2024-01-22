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

interface ProductList{
  total: string,
  skip: string,
  limit: string,
  products:Product[]
}


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) {}
  title = 'redsquarefrontend';
  currentProductID  =  this.route.snapshot.params['id'];
  ngOnInit(){
    this.getAllProduct();
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


     //Get products detail  -------
      apiGetAllProduct = 'https://dummyjson.com/product/'
      getAllProduct(): void {
        this.http.get<Product>(this.apiGetAllProduct + this.currentProductID).subscribe({
          next: (data) => {
            this.product = data;

          },
          error: (error) => {
            // Handle error
            console.error('Get product detail failed:', error);
          },
        });
      }



      //Add product to cart
      cartItems: Product[] = [];

      addToCart(product: Product): void {
  
        this.cartItems.push(product);
        localStorage.setItem('Cart', JSON.stringify(this.cartItems));
        this.router.navigateByUrl('/cart')
      }
    
      getCartItems(): Product[] {
        return this.cartItems;
      }

      getCartDetails(){
        const storedItemsString = localStorage.getItem('Cart');
        // Check if the stored string is not null before parsing
        if (storedItemsString !== null) {
          // Parse the user details from LocalStorage
          this.cartItems = JSON.parse(storedItemsString) as Product[];
        }
      }



      




}
