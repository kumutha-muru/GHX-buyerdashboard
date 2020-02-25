import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'company', 'signintime'];
  displayedColumns2: string[] = [ 'date','time','rep', 'company', 'location','department','subject'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2= new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  company: string;
  signintime: number|string;
}
export interface PeriodicElement1{
  date:number|string;
  time:number|string;
  rep:string;
  company: string;
  location:string;
  department:string;
  subject:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Tina Johansen', signintime: 'Jun 16, 2016 06:54 PM', company: 'Vendormate, Inc'},
  { name: 'Bill Hayes', signintime: 'Jun 16, 2016 06:54 PM', company: 'CROCKER INDUSTRIES-docRGR'},
  { name: 'Stuart Seiler', signintime: 'Jun 16, 2016 06:54 PM', company: 'Styker'},
  { name: 'John Ohrenberger', signintime:  'Jun 16, 2016 06:54 PM', company: 'Pfizer'},
  { name: 'Michael Adams', signintime:  'Jun 16, 2016 06:54 PM', company: 'Styker'},
  { name: 'Ryan Mason', signintime:  'Jun 16, 2016 06:54 PM', company: 'Styker'},
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {date:'Mar 13, 2019',time:'08:00 AM',rep:'reponeupdated,carolineupdated',company:'Tested_02Oct_Company 1',location:'chennai',department:'Cath Lab',subject:'OTA One Year'},
  {date:'May 17, 2018',time:'12:00 PM',rep:'fname lname',company:'Tested_28Sep_Company 1',location:'Florida',department:'Cath Lab',subject:'Long Appt'}
]

