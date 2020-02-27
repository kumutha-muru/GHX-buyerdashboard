import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'company', 'signintime'];
  displayedColumns1: string[] = [ 'company', 'registrationdate'];
  displayedColumns2: string[] = [ 'date','time','rep', 'company', 'location','department','subject'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  dataSource2= new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }
}

export interface PeriodicElement {
  name: string;
  company: string;
  signintime: number|string;
}
export interface PeriodicElement1 {
  company: string;
 registrationdate: number|string;
}
export interface PeriodicElement2{
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
{ company: 'Vendormate, Inc',registrationdate:'Jun 20, 2016'},
{ company: 'Medicare Center',registrationdate:'Jun 20, 2016'},
{ company: 'First Response Ambulatory Services',registrationdate:'Jun 20, 2016'},
{ company: 'Smart Devices Inc',registrationdate:'Jun 20, 2016'}
]

const ELEMENT_DATA2: PeriodicElement2[] = [
  {date:'Mar 13, 2019',time:'08:00 AM',rep:'reponeupdated carolineupdated',company:'Tested_02Oct_Company 1',location:'chennai',department:'Cath Lab',subject:'OTA One Year'},
  {date:'May 17, 2018',time:'12:00 PM',rep:'fname lname',company:'Tested_28Sep_Company 1',location:'Florida',department:'Cath Lab',subject:'Long Appt'}
]

