import { UserServiceService } from './../../Service/user-service.service';
import { Users } from './../../Model/user';
import { AuthService } from './../../Service/auth.service';
import { Comment } from './../../model/Comment';
import { CommentService } from './../../Service/comment.service';

import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  myFullresImage
  img_zoom: string;
  id: number;
  product: Product;
  comment: Comment;
  Users: Users;
  img_0;
  img_1;
  img_2;
  img_3;

  constructor(private route: ActivatedRoute, private router: Router,
    public AuthService: AuthService, public NgZone: NgZone,
    public UserServiceService: UserServiceService,
    private productserviec: ProductService, private commentservice: CommentService) { }

  ngOnInit() {
    this.product = new Product();
    this.comment = new Comment();
    this.Users = new Users();

    this.id = this.route.snapshot.params['id'];
    this.productserviec.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
        this.img_0 = this.product.hinh0;
        this.img_1 = this.product.hinh1;
        this.img_2 = this.product.hinh2;
        this.img_3 = this.product.hinh3;
        // console.log(this.product)
        this.img_zoom = this.img_0;
        this.myFullresImage = this.img_0;
      }, error => console.log(error));
    // load binh luan
    this.commentservice.get('http://localhost:8000/greenmarket/api/idmathang/', this.id).subscribe(data => {
      console.log(data);
      // this.comment = Object.assign({}, ...data);
      this.comment=data;
      console.log("------data cmt id--- : " + this.id);
      console.log("------data cmt --- : " + this.comment.noiDungBinhLuan);
    })

  }

  save() {
    this.comment.users = {};
    this.comment.users.id = this.AuthService.user_id();
    this.comment.matHang = {};
    this.comment.matHang.id = this.id;
    console.log("id mat hang : " +   this.comment.matHang.id);
    console.log("id user : " +  this.comment.users.id);
    console.log("id nd : " + this.comment.noiDungBinhLuan);
    this.commentservice.createComment(this.comment).subscribe(data => {
      console.log("data-- " + data)
      this.comment = new Comment();
    },
      (error) => {
        console.log("er-----> : " + error);
      });
  }

}
