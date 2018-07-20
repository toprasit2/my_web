import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    $(document).ready(function(){
      $('#home').addClass("grey lighten-3");
      $('#about').removeClass("grey lighten-3");
      $('#portfolio').removeClass("grey lighten-3");
    });
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 650){
            $('#second').addClass("fadeInLeft");
            $('#second').css("visibility",'visible')
        }
        if (y > 1300){
            $('#third').addClass("fadeInLeft");
            $('#third').css("visibility",'visible')
        }
        console.log(y)
    });
  }

  ngOnInit() {
  }

}
