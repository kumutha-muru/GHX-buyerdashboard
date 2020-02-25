import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { VendorComponent } from './vendor/vendor.component';

import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:'index',
    component:IndexComponent
  },
  {

    path:'vendor',
    component:VendorComponent
  },
{
path:'',
component:HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
