import { Component, OnInit } from '@angular/core';
// import { FileUploader } from "angular-file-upload";
@Component({
  selector: 'app-to-sell-product',
  templateUrl: './to-sell-product.component.html',
  styleUrls: ['./to-sell-product.component.css']
})
export class ToSellProductComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }
  scroll(el: HTMLElement) {

    el.scrollIntoView({behavior: 'smooth'});

  }

}
