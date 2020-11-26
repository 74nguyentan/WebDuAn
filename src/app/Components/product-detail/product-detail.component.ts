import { UserServiceService } from './../../Service/user-service.service';
import { Users } from './../../Model/user';
import { AuthService } from './../../Service/auth.service';
import { Comment } from './../../model/Comment';
import { CommentService } from './../../Service/comment.service';

import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';
import { History } from 'src/app/model/History';
import { HistoryService } from 'src/app/Service/history.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  myFullresImage
  img_zoom: string;
  id: number;
  lienhe:boolean = true;
  product: Product;
  comments: Comment = new Comment();
  history: History = new History();
  Users: Users;
  img_0;
  img_1;
  img_2;
  img_3;
  clickFavourite = false;

  constructor(private route: ActivatedRoute, private router: Router,
    public AuthService: AuthService, public NgZone: NgZone,
    public UserServiceService: UserServiceService,
    private productserviec: ProductService, private commentservice: CommentService, private historyservice: HistoryService) { }

  ngOnInit() {
    this.product = new Product();
    this.Users = new Users();
    this.comments = new Comment();

    this.id = this.route.snapshot.params['id'];
    this.productserviec.getProduct(this.id)
      .subscribe(data => {
        // console.log(data)
        this.product = data;
        this.img_0 = this.product.hinh0;
        this.img_1 = this.product.hinh1;
        this.img_2 = this.product.hinh2;
        this.img_3 = this.product.hinh3;
        // console.log(this.product)
        this.img_zoom = this.img_0;
        this.myFullresImage = this.img_0;
      }, error => console.log(error));

    //save history
    console.log("dfghjkdfghj"+ this.AuthService.user_id())
    if(this.AuthService.user_id() != null){
      this.savehistory();
    }
    // load binh luan
    this.load();
  }

  load(){
    this.comments = new Comment();
    this.commentservice.getComment(this.id).subscribe(data => {
      // console.log(data);
      // this.comment = Object.assign({}, ...data);
      // this.comment= data;
      this.comments =data;
    })

  }

  save() {
    var nd = this.comments.noiDungBinhLuan;
    this.comments = new Comment();
    this.comments.noiDungBinhLuan =  nd;
    this.comments.users = {};
    this.comments.users.id = this.AuthService.user_id();
    this.comments.matHang = {};
    this.comments.matHang.id = this.id;
    this.commentservice.createcomment(this.comments).subscribe(data => {
      // console.log(this.comments)
      console.log(data);
      this.load();
    },
      (error) => {
        console.log("er-----> : " + error);
      });
  }


  savehistory(){
    this.history = new History();
    this.history.users = {};
    this.history.users.id = this.AuthService.user_id();
    this.history.matHang = {};
    this.history.matHang.id = this.id;
    console.log(this.history);
    this.historyservice.createhistory(this.history).subscribe(data =>{
      console.log(data);
      this.history = new History();
    },
    (error) => {
      console.log("er-----> : " + error);
    });

  }

  updatehistory(){
    this.history = new History();
    this.history.users = {};
    this.history.users.id = this.AuthService.user_id();
    this.history.matHang = {};
    this.history.matHang.id = this.id;
    console.log(this.history);
    this.historyservice.updatehistory(this.id, history).subscribe(data =>{
      console.log(data);
      this.history = new History();
    },
    (error) => {
      console.log("er-----> : " + error);
    });

  }


infomationShop(id:number){
  this.router.navigate(['shop', id]);
  this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
}

favourite(){
  this.clickFavourite = true;
}
}
