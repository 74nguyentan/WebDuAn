import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { Users } from 'src/app/Model/user';
import { HistoryService } from 'src/app/Service/history.service';
import { ProductService } from 'src/app/Service/product.service';
import { AuthService } from './../../Service/auth.service';
import { History } from 'src/app/model/History';

@Component({
  selector: 'app-product-news',
  templateUrl: './product-news.component.html',
  styleUrls: ['./product-news.component.css']
})
export class ProductNewsComponent implements OnInit {
  id: number;
  products: Product = new Product();
  page: number;
  collection = [];
  history: History = new History();
  Users: Users;
  constructor(private route: Router, private productserviec: ProductService, private historyservice: HistoryService,
    public AuthService: AuthService,) {

  }

  ngOnInit(): void {
    this.productserviec.getProductList().subscribe(data =>{
       this.products = data;
       this.products = data.filter((value,i) => i <= 11);
    })
  }

  productDetails(id: number){
    this.route.navigate(['details', id]);
    this.history = new History();
    this.history.users = {};
    this.history.users.id = this.AuthService.user_id();
    this.history.matHang = {};
    this.history.matHang.id = id;
    console.log(this.history);
    this.historyservice.createhistory(this.history).subscribe(data =>{
      console.log(data);
      this.history = new History();
      this.refresh();
    },
    (error) => {
      console.log("er-----> : " + error);
    });

  }
  refresh(): void {
    window.location.reload();
  }
}

