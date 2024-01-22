import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fizzBuzz(this.input_Q1)
  }

  //Question 1 FizzBuzz
  input_Q1 = 15
  fizzBuzzResults: any[] = []
  
  //FizzBuzz Function
  fizzBuzz(n: number): void {
    this.fizzBuzzResults = [];
    for (let i = 1; i <= n; i++) {
       // The condition checks if the remainder of the division of 'i' by 3 is equal to 0.
      if (i % 3 == 0 && i % 5 == 0) {
        this.fizzBuzzResults.push('FizzBuzz');
      } else if (i % 3 == 0) {
        this.fizzBuzzResults.push('Fizz');
      } else if (i % 5 == 0) {
        this.fizzBuzzResults.push('Buzz');
      } else {
        this.fizzBuzzResults.push(i);
      }
    }
  }







}
