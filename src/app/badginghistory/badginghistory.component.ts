import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badginghistory',
  templateUrl: './badginghistory.component.html',
  styleUrls: ['./badginghistory.component.css']
})
export class BadginghistoryComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    var wrapper1 = document.getElementById('wrapper1');
var wrapper2 = document.getElementById('wrapper2');
wrapper1.onscroll = function() {
  wrapper2.scrollLeft = wrapper1.scrollLeft;
};
wrapper2.onscroll = function() {
  wrapper1.scrollLeft = wrapper2.scrollLeft;
};
  }

}
