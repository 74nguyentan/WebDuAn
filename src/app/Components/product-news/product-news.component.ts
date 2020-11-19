import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-news',
  templateUrl: './product-news.component.html',
  styleUrls: ['./product-news.component.css']
})
export class ProductNewsComponent implements OnInit {
  hover = false;
  hover1 = false;
  id;
  products = products;
  page: number;
  collection = [];
  constructor() {

  }

  ngOnInit(): void {
  }

}

export const products = [

  {
    image:'../../../assets/images/images/pronews/sofa.jpg',
    name: 'Điện Thoại Oppo Oppo F9 Pro 2 Sim',
    price: '5.000.000',
    price2: '8.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/ghe cafe.jpg',
    name: 'iPhone 11 - Chính Hãng VN/A',
    price: '1.000.000',
    price2: '1.500.000'
  },
  {
    image:'../../../assets/images/images/pronews/tulanh.png',
    name: 'Điện Thoại Siêu Nhỏ 2 Sim 3310mini',
    price: '3.000.000',
    price2: '4.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Điện Thoại Siêu Nhỏ 2 Sim 3310mini',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 't sẽ thêm hiệu ứng ',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/ghe cafe.jpg',
    name: 'Bộ Bàn Ghế Cafe 1',
    price: '1.000.000',
    price2: '1.500.000'
  },
  {
    image:'../../../assets/images/images/pronews/tulanh.png',
    name: 'Tủ Lạnh Sanaky 140 Lít 2',
    price: '3.000.000',
    price2: '4.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Smart Tivi Led LG 43 inch 3',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Smart Tivi Led LG 43 inch 4',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/ghe cafe.jpg',
    name: 'Bộ Bàn Ghế Cafe 5',
    price: '1.000.000',
    price2: '1.500.000'
  },
  {
    image:'../../../assets/images/images/pronews/tulanh.png',
    name: 'Tủ Lạnh Sanaky 140 Lít 6',
    price: '3.000.000',
    price2: '4.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Smart Tivi Led LG 43 inch 7',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Smart Tivi Led LG 43 inch 8',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/ghe cafe.jpg',
    name: 'Bộ Bàn Ghế Cafe 9',
    price: '1.000.000',
    price2: '1.500.000'
  },
  {
    image:'../../../assets/images/images/pronews/tulanh.png',
    name: 'Tủ Lạnh Sanaky 140 Lít 10',
    price: '3.000.000',
    price2: '4.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Smart Tivi Led LG 43 inch 11',
    price: '4.000.000',
    price2: '5.000.000'
  },
  {
    image:'../../../assets/images/images/pronews/tv.jpg',
    name: 'Smart Tivi Led LG 43 inch 12',
    price: '4.000.000',
    price2: '5.000.000'
  }
  ];

