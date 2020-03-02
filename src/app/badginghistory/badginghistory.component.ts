import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-badginghistory',
  templateUrl: './badginghistory.component.html',
  styleUrls: ['./badginghistory.component.css']
})
export class BadginghistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $(".wmd-view-topscroll").scroll(function(){
          $(".wmd-view")
              .scrollLeft($(".wmd-view-topscroll").scrollLeft());
      });
      $(".wmd-view").scroll(function(){
          $(".wmd-view-topscroll")
              .scrollLeft($(".wmd-view").scrollLeft());
      });
  });
  
  
  }

}
