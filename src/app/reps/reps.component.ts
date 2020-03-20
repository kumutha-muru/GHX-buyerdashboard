import { Component, OnInit } from '@angular/core';
import { ServicefileService } from '../servicefile.service';

@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.css']
})
export class RepsComponent implements OnInit {
  data: any = [];
  obj: any;
  obj1: any;
  data1:any =[];
  obj2:any;
 
  displayedColumns: string[] = ['actions', 'firstname','lastname','company', 'phone', 'userid','requirements','sanctions', 'locations'];
  displayedColumns1: string[] = ['checkbox','haveappoinmentpermission', 'firstname','lastname','company', 'userid'];
  constructor(public getvalue: ServicefileService) { }
  ngOnInit() {
    this.getvalue.vendorreps().subscribe(data => {
      this.data = data;
      this.obj = this.data["VisionResponse"]
      this.obj1 = this.obj["VendorRepSearchSummaryList"]
      console.log(this.obj1);
      console.log(data)
    })
      this.getvalue.repspermissions().subscribe(data1 => {
      this.data1 = data1;
      this.obj = this.data1["VisionResponse"]
      this.obj2 = this.obj["VendorRepSearchSummaryList"]
      console.log(this.obj2);
      console.log(data1)
    })
  }

}
