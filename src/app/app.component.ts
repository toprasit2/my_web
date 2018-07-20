import { Component } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor() {
    $(document).ready(function(){
      $('.sidenav').sidenav({
        onOpenStart: true,
      });
    });
    $(document).ready(function(){
      $('.modal').modal();
    });
   }
  ngOnInit() {
    
  }
}
