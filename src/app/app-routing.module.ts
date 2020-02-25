import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { VendorComponent } from './vendor/vendor.component';


const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'vendor',
    component:VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
