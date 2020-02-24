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
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  company: string;
  signintime: number|string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Tina Johansen', signintime: 'Jun 16, 2016 06:54 PM', company: 'Vendormate, Inc'},
  { name: 'Bill Hayes', signintime: 'Jun 16, 2016 06:54 PM', company: 'CROCKER INDUSTRIES-docRGR'},
  { name: 'Stuart Seiler', signintime: 'Jun 16, 2016 06:54 PM', company: 'Styker'},
  { name: 'John Ohrenberger', signintime:  'Jun 16, 2016 06:54 PM', company: 'Pfizer'},
  { name: 'Michael Adams', signintime:  'Jun 16, 2016 06:54 PM', company: 'Styker'},
  { name: 'Ryan Mason', signintime:  'Jun 16, 2016 06:54 PM', company: 'Styker'},
];


