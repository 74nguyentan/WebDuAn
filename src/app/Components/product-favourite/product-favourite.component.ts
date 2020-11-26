import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-favourite',
  templateUrl: './product-favourite.component.html',
  styleUrls: ['./product-favourite.component.css']
})
export class ProductFavouriteComponent implements OnInit {

  p: number;
  constructor() { }

  ngOnInit(): void {
  }
  product = [
    {
      image:'https://i.pinimg.com/564x/f3/60/31/f36031f081af4dcfd7f25476c7e9f56b.jpg',
      name: 'Ghế Sofa GH-8269 ',
      price: '5.000.000',
    },
    {
      image:'https://i.pinimg.com/564x/f3/60/31/f36031f081af4dcfd7f25476c7e9f56b.jpg',
      name: 'Bộ Bàn Ghế Cafe',
      price: '1.000.000',
    },
    {
      image:'https://i.pinimg.com/564x/f3/60/31/f36031f081af4dcfd7f25476c7e9f56b.jpg',
      name: 'Tủ Lạnh Sanaky 140 Lít',
      price: '3.000.000',
    },
    {
      image:'https://i.pinimg.com/564x/f3/60/31/f36031f081af4dcfd7f25476c7e9f56b.jpg',
      name: 'Smart Tivi Led LG 43 inch',
      price: '4.000.000',
    }


  ]
}
