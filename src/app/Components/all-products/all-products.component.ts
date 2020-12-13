import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { Users } from 'src/app/Model/user';
import { CategoryService } from 'src/app/Service/category.service';
import { HistoryService } from 'src/app/Service/history.service';
import { ProductService } from 'src/app/Service/product.service';
const CATEGORY_API = 'http://localhost:8000/greenmarket/api/category';
import { History } from 'src/app/model/History';
import { AuthService } from './../../Service/auth.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  // product: products;
  p: number;
  public category: Array<any>;
  products: Product = new Product();
  history: History = new History();
  Users: Users;
  constructor(
    private productservice: ProductService ,
    private router: Router,
    private CategoryService: CategoryService,private historyservice: HistoryService,public AuthService: AuthService
    ) { }

  ngOnInit(): void {
    this.loadall();
    this.CategoryService.getAll(CATEGORY_API).subscribe((data) => {
      this.category = data;
    });
  }

  loadall(){
    this.productservice.getProductList().subscribe(data => {
      // this.products = data;
      this.products = this.shuffle(data);
      console.log(this.products);
    });
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
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

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getProduct(id: number) {
    this.productservice.getfitler(id)
      .subscribe(data => {
        this.products = data;
      }, error => console.log(error));
  }
  getPrice(id: number) {
    this.productservice.getprice(id)
      .subscribe(data => {
        this.products = data;
      }, error => console.log(error));
  }
  getPrice300(id: number) {
    this.productservice.getprice300(id)
      .subscribe(data => {
        this.products = data;
      }, error => console.log(error));
  }
  getPrice1000(id: number) {
    this.productservice.getprice1000(id)
      .subscribe(data => {
        this.products = data;
      }, error => console.log(error));
  }
}

