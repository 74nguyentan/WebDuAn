import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-news',
  templateUrl: './product-news.component.html',
  styleUrls: ['./product-news.component.css']
})
export class ProductNewsComponent implements OnInit {

  products = [
    {
      image:'../../../assets/images/images/pronews/sofa.jpg',
      name: 'Ghế Sofa GH-8269 ',
      price: '5.000.000',
      price2: '8.000.000'
    },
    {
      image:'../../../assets/images/images/pronews/ghe cafe.jpg',
      name: 'Bộ Bàn Ghế Cafe',
      price: '1.000.000',
      price2: '1.500.000'
    },
    {
      image:'../../../assets/images/images/pronews/tulanh.png',
      name: 'Tủ Lạnh Sanaky 140 Lít',
      price: '3.000.000',
      price2: '4.000.000'
    },
    {
      image:'../../../assets/images/images/pronews/tv.jpg',
      name: 'Smart Tivi Led LG 43 inch',
      price: '4.000.000',
      price2: '5.000.000'
    }


  ]
  products2 = [

    {

        image:'../../../assets/images/images/pronews/xesh.jpg',
        name: 'Xe máy Sketchup SH 150i Black',
        price: '45.000.000',
        price2: '60.000.000'
      },
      {
        image:'../../../assets/images/images/pronews/lonuong.jpg',
        name: 'Lò Nướng Kangaroo KG191',
        price: '2.500.000',
        price2: '4.000.000'
      },
      {
        image:'../../../assets/images/images/pronews/golf.jpg',
        name: 'Bộ Golf Fullset WiWlson 12000XV ',
        price: '7.500.000',
        price2: '10.000.000'
      },
      {
        image:'../../../assets/images/images/pronews/gangtay.jpeg',
        name: 'Găng Tay Da Vải MallCom',
        price: '200.000',
        price2: '400.000'
      }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
