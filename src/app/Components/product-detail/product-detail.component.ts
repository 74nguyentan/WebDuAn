import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  myFullresImage
  img_zoom
  img_1: string =
    '//vn-test-11.slatic.net/p/df5c3f569917f9b2d59d802e22ffc485.jpg_340x340q80.jpg_.webp';
  img_2: string =
    '//vn-test-11.slatic.net/p/6684de7c5cf45722fce698dfb31eb185.jpg_340x340q80.jpg_.webp';
  img_3: string =
    '//vn-test-11.slatic.net/p/d9e21933b863bb9670d0bea35b9736dc.jpg_340x340q80.jpg_.webp';
  img_4: string =
    '//vn-test-11.slatic.net/p/0c71728ea3a5a3e2aa7243728de12ef9.jpg_340x340q80.jpg_.webp';
  constructor() { this.img_zoom = this.img_1;}

  ngOnInit(): void {

  }


}
