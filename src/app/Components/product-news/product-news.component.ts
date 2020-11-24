import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-news',
  templateUrl: './product-news.component.html',
  styleUrls: ['./product-news.component.css']
})
export class ProductNewsComponent implements OnInit {
  id;
  products: Product = new Product();
  page: number;
  collection = [];
  constructor(private route: Router, private productserviec: ProductService) {

  }

  ngOnInit(): void {
    this.productserviec.getProductList().subscribe(data =>{
       this.products = data;
       this.products = data.filter((value,i) => i <= 11);
    })
  }

  productDetails(id: number){
    this.route.navigate(['details', id]);
  }
}

