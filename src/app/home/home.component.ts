import { Component, OnInit } from '@angular/core';
import { ServicefileService } from '../servicefile.service';
import { MatTableDataSource } from '@angular/material';
import { getRecentVisitors } from '../classfiles/classfile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any=[];
  data1:any=[];
  data2:any=[];
  obj:any;
  obj1:any;
  obj2:any;
  obj3:any;
  displayedColumns: string[] = ['name', 'company', 'signintime'];
  displayedColumns1: string[]=['company','registrationdate'];
  displayedColumns2: string[]=['date','time','rep','company','location','department','subject'];
  constructor(public getvalue: ServicefileService) { }
  ngOnInit() {
      this.getvalue.recentvisitors().subscribe(data =>{this.data=data;
      this.obj=this.data["VisionResponse"]
      this.obj1=this.obj["SignupViewSummaryList"]
      console.log(this.obj1)
     });
  

      this.getvalue.recentvendorregistrations().subscribe(data1 => {this.data1=data1;
      this.obj=this.data1["VisionResponse"]
      this.obj2=this.obj["RegistrationSummaryList"]
      console.log(this.obj2)
    });

      this.getvalue.appoinment().subscribe(data2 => {this.data2=data2;
      this.obj=this.data2["VisionResponse"]
      this.obj3=this.obj["AppointmentSummaryList"]
      console.log(this.obj3)
    });
}
}


