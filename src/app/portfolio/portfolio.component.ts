import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $('#home').removeClass("grey lighten-3");
      $('#about').removeClass("grey lighten-3");
      $('#portfolio').addClass("grey lighten-3");
    });
   }

  ngOnInit() {
  }

}
