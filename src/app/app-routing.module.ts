import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestNewApp1Component } from './test-new-app1/test-new-app1.component';


const routes: Routes = [
  {
    path :'',
    component :TestNewApp1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
