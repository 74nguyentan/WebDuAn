import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myThumbnail = "//vn-test-11.slatic.net/p/8b7de0bc248c430ed2a0c160ac59de5f.jpg_340x340q80.jpg_.webp"
  myFullresImage=  "//vn-test-11.slatic.net/p/8b7de0bc248c430ed2a0c160ac59de5f.jpg_340x340q80.jpg_.webp"
}
