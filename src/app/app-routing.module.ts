import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { VendorComponent } from './vendor/vendor.component';

import { HomeComponent } from './home/home.component';
import { RepsComponent } from './reps/reps.component';



const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {

    path: 'vendor',
    component: VendorComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'reps',
    component:RepsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
