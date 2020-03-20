import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signinarep',
  templateUrl: './signinarep.component.html',
  styleUrls: ['./signinarep.component.css']
})
export class SigninarepComponent implements OnInit {
  marked = true;
  constructor() { }
  ngOnInit() {
  }
  visibility(e) { this.marked = e.target.checked; }
}
