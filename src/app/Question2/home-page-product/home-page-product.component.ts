import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}



@Component({
  selector: 'app-home-page-product',
  templateUrl: './home-page-product.component.html',
  styleUrls: ['./home-page-product.component.css']
})
export class HomePageProductComponent implements OnInit {

  constructor(
    private http: HttpClient
    ) {}
  title = 'redsquarefrontend';

  ngOnInit(){
    this.getAllProduct();
    this.getAllCategoryProduct()

    const storedItemsString = localStorage.getItem('userProfile')
    const authToken = localStorage.getItem('authToken')
    if(storedItemsString !== null){
      this.currentUser =   JSON.parse(storedItemsString)
    }
    if(authToken !== null){
      this.authToken = authToken
    }


    

  }



  //Question 2 Code Solution -------------

  //Pagination
  currentPage = 1

    //Login  -------
  apiLogin = 'https://dummyjson.com/auth/login';
  username = 'kminchelle'
  password = '0lelplR'
  authToken = ''

  currentUser: User = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
  };


  login(): void {
    this.http.post<any>(`${this.apiLogin}`, { username: this.username, password: this.password })
    .subscribe({
      next: (response) => {
        // Handle successful login response
        this.authToken = response.token;
    
        // Store the token in local storage or wherever you prefer
        localStorage.setItem('authToken', this.authToken);
        localStorage.setItem('userProfile', JSON.stringify(response));
        this.currentUser = response
        
        // Optionally, you can redirect to another page after login
      },
      error: (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    });
    
  }

  logout(){
    localStorage.clear()
    this.authToken = ''
    this.currentUser = {} as User;

  }

     //Get all products  -------
      apiGetAllProduct = 'https://dummyjson.com/products'
      products: Product[] = [];
      filteredItems: Product[] = [];
      getAllProduct(): void {
        this.http.get<ProductList>(this.apiGetAllProduct, {
          params: {
            total: '100',
            skip: 0,
            limit: '100',
          },
        }).subscribe({
          next: (data) => {
            this.products = data.products;
            this.filteredItems  = data.products;
          },
          error: (error) => {
            // Handle error
            console.error('Get products failed:', error);
          },
        });
      }

      //Filter products by title, category and price -------
      searchTerm: string = '';
      selectedCategory: string = '';
      sortprice: string = '';
      filterItems() {
        this.currentPage = 1
   
        // Filter by search term
        let filteredItems = this.products.filter(item => {
          const searchTerms = this.searchTerm.toLowerCase().split(' ');
          const searchName = item.title.toString().toLowerCase();
          const searchDesc = item.description.toString().toLowerCase();
          return searchName.includes(searchTerms[0]) || searchDesc.includes(searchTerms[0]) ;
        });
      
        // Filter by selected category 
        if (this.selectedCategory) {
          filteredItems = filteredItems.filter(item => item.category.toLowerCase() === this.selectedCategory.toLowerCase());
        }
      
        // Sort by price
        if (this.sortprice === 'highest') {
          filteredItems = filteredItems.sort((a, b) => b.price - a.price);
        } else if (this.sortprice === 'lowest') {
          filteredItems = filteredItems.sort((a, b) => a.price - b.price);
        }

        this.filteredItems = filteredItems;
    
     
      }



      //Get all categories  -------
      apiGetCategori = 'https://dummyjson.com/products/categories'
      categories:any
      getAllCategoryProduct(): void {
        this.http.get<any>(this.apiGetCategori, {
    
        }).subscribe({
          next: (data) => {
            this.categories = data;
            //console.log(this.categories)
          },
          error: (error) => {
            // Handle error
            console.error('Get categori failed:', error);
          },
        });
      }


      


 

      




}
