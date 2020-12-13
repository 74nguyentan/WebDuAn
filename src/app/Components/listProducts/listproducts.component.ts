import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loaihang } from 'src/app/model/Category';
import { Product } from 'src/app/model/Product';
import { Users } from 'src/app/Model/user';
import { History } from 'src/app/model/History';
import { CategoryService } from 'src/app/Service/category.service';
import { HistoryService } from 'src/app/Service/history.service';
import { ProductService } from 'src/app/Service/product.service';
import { AuthService } from './../../Service/auth.service';

// const PRODUCT_API = 'http://localhost:8989/api/mathang';
// const PRODUCT_API_ID = PRODUCT_API + '/mathangId'
const CATEGORY_API = 'http://localhost:8000/greenmarket/api/category';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  public category: Array<any>;
  id: number;
  product: Product;
  p: number;
  history: History = new History();
  Users: Users;
  clickCurrent: boolean = false;
  clickCurrent1: boolean = false;
  clickCurrent2: boolean = false;
  clickCurrent3: boolean = false;
  clickCurrent4: boolean = false;
  click = false;

  constructor(
    private CategoryService: CategoryService,
    private route: ActivatedRoute, private router: Router, public AuthService: AuthService,
    private productserviec: ProductService, private historyservice: HistoryService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    this.productserviec.getidloaihang(this.id)
      .subscribe(data => {
        this.product = data;

      }, error => console.log(error));

    this.CategoryService.getAll(CATEGORY_API).subscribe((data) => {
      this.category = data;
    });
  }
  getProduct(id: number) {
    this.productserviec.getfitler(id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));
  }
  getPrice(id: number) {
    this.productserviec.getprice(id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));
  }
  getPrice300(id: number) {
    this.productserviec.getprice300(id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));
  }
  getPrice1000(id: number) {
    this.productserviec.getprice1000(id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));
  }
  productDetails(id: number) {
    this.router.navigate(['details', id]);
    this.history = new History();
    this.history.users = {};
    this.history.users.id = this.AuthService.user_id();
    this.history.matHang = {};
    this.history.matHang.id = id;
    console.log(this.history);
    this.historyservice.createhistory(this.history).subscribe(data => {
      console.log(data);
      this.history = new History();
      // this.refresh();
    },
      (error) => {
        console.log("er-----> : " + error);
      });

  }

  // refresh(): void {
  //   window.location.reload();
  // }
}



