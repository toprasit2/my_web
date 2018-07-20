import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(document).ready(function(){
      $('.carousel').carousel({
      });
    });
    $(document).ready(function(){
      $('#home').removeClass("grey lighten-3");
      $('#about').addClass("grey lighten-3");
      $('#portfolio').removeClass("grey lighten-3");
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 200){
          $('#second').addClass("fadeInLeft");
          $('#second').css("visibility",'visible')
      }
      console.log(y)
  });
  }

  ngOnInit() {
  }

}
