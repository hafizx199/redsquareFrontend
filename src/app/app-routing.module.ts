import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzbuzzComponent } from './Question1/fizzbuzz/fizzbuzz.component'; 
const routes: Routes = [
  { path: '', component: FizzbuzzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
