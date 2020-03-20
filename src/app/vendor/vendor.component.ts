import { Component, OnInit } from '@angular/core';
import { ServicefileService } from '../servicefile.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  data: any = [];
  data1: any = [];
  obj: any;
  obj1: any;
  obj2: any;
  x: any;
  v1:any;
  displayedColumns: string[] = ['actions', 'company', 'doingbusinessas', 'requirements', 'sanctions', 'locations'];
  displayedColumns1: string[] = ['checkbox','haveappoinmentpermission', 'company', 'doingbusinessas'];
  constructor(public getvalue: ServicefileService) { }
  ngOnInit() {
    this.getvalue.vendorbycustomer().subscribe(data => {
      this.data = data;
      this.obj = this.data["VisionResponse"]
      this.obj1 = this.obj["VendorSearchSummaryList"]
      console.log(this.obj1);
      for (var i = 0; i < this.obj1.length; i++) {
        this.x = this.obj1[i].location;
        var s = this.x.split('##');
 // for (var j = 0; j < s.length; j++) {
        this.v1=s;
          console.log(this.v1)
  //}
       // console.log(this.x)
       }
    })
    this.getvalue.vendorpermissions().subscribe(data1 =>{
      this.data1=data1;
      this.obj = this.data1["VisionResponse"]
      this.obj2 = this.obj["VendorSearchSummaryList"]
      console.log(this.obj2);
    })
 }
}
