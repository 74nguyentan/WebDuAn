import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopDuAn';

// $(document).ready(function(){

//   // hide #back-top first
//   $("#back-top").hide();

//   // fade in #back-top
//   $(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//         $('#back-top').fadeIn();
//       } else {
//         $('#back-top').fadeOut();
//       }
//     });

//     // scroll body to 0px on click
//     $('#back-top .fi-arrow-up').click(function () {
//       $('body,html').animate({
//         scrollTop: 0
//       }, 800);
//       return false;
//     });
//   });

// });
}
