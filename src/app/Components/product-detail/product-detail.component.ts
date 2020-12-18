import { productFavourite } from './../../model/productFavourite';
import { ProductFavouriteService } from './../../Service/product-favourite.service';
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
import { Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogComponent } from 'src/app/Dialog/confirm-dialog/confirm-dialog.component';
import { FailDialogComponent } from 'src/app/Dialog/fail-dialog/fail-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  // fronend
  boxpeople = false;
  boxmess = false;
  //fronend
  myFullresImage;
  img_zoom: string;
  id: number;
  lienhe: boolean = true;
  product: Product;
  comments: Comment = new Comment();
  history: History = new History();
  productFavourite: productFavourite;
  Users: Users;
  img_0;
  img_1;
  img_2;
  img_3;
  clickFavourite = false;
  clickFavourite1 = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public AuthService: AuthService,
    public NgZone: NgZone,
    public UserServiceService: UserServiceService,
    private productserviec: ProductService,
    private commentservice: CommentService,
    private ProductFavouriteService: ProductFavouriteService,
    @Inject(MatDialog) public data: any,private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.product = new Product();
    this.Users = new Users();
    this.comments = new Comment();
    this.productFavourite = new productFavourite();

    this.id = this.route.snapshot.params['id'];
    this.productserviec.getProduct(this.id).subscribe(
      (data) => {
        // console.log(data)
        this.product = data;
        this.img_0 = this.product.hinh0;
        this.img_1 = this.product.hinh1;
        this.img_2 = this.product.hinh2;
        this.img_3 = this.product.hinh3;
        // console.log(this.product)
        this.img_zoom = this.img_0;
        this.myFullresImage = this.img_0;
      },
      (error) => console.log(error)
    );

this.loadFavorite();
    this.load();
  }

  load() {
    this.comments = new Comment();
    this.commentservice.getComment(this.id).subscribe((data) => {
      this.comments = data;
    });
  }

  loadFavorite(){
    // san pham yeu thich
    this.ProductFavouriteService.getidMatHang(this.id).subscribe((data) => {
      this.productFavourite = Object.assign({}, ...data);
      // console.log("-- favori -- idd : " + this.productFavourite.id);

      if (this.productFavourite.yeuThich == true) {
        this.clickFavourite = this.productFavourite.yeuThich;
        this.clickFavourite1 = !this.clickFavourite;
      } else {
        this.clickFavourite = false;
        this.clickFavourite1 = !this.clickFavourite;
      }
    },
    (error) => console.log("error favourite -- > " + error)
    );
  }

  save() {
    if(this.AuthService.user_id() === "null"){
      const confirmDialog = this.dialog.open(FailDialogComponent, {
        data: {
          title: 'vui lòng đăng nhập !',
        },
      });
    } else{
    var nd = this.comments.noiDungBinhLuan;
    this.comments = new Comment();
    this.comments.noiDungBinhLuan = nd;
    this.comments.users = {};
    this.comments.users.id = this.AuthService.user_id();
    this.comments.matHang = {};
    this.comments.matHang.id = this.id;
    this.commentservice.createcomment(this.comments).subscribe(
      (data) => {
        // console.log(this.comments)
        console.log(data);
        this.load();
      },
      (error) => {
        console.log('er-----> : ' + error);
      }
    );
    }
  }

  infomationShop(id: number) {
    this.router.navigate(['shop', id]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  favourite() {
    if(this.AuthService.user_id() === "null"){
      const confirmDialog = this.dialog.open(FailDialogComponent, {
        data: {
          title: 'vui lòng đăng nhập !',
        },
      });
    } else{
    if (this.clickFavourite == true) {
      // this.productFavourite = this.product
      // console.log(' delete -----id -- >>:' +this.id);

      this.ProductFavouriteService.deleteFavourite(this.productFavourite.id).subscribe(
        (data) => {
          console.log(data);
          this.clickFavourite = false;
          this.clickFavourite1 = true;
          // console.log("detele success !");

        },
        (error) => console.log("err delete favourite " + error)
      );
    } else {
      this.productFavourite = new productFavourite();
      this.productFavourite.yeuThich = true;
      this.productFavourite.users = {};
      this.productFavourite.users.id = this.AuthService.user_id();
      this.productFavourite.matHang = {};
      this.productFavourite.matHang.id = this.id;

      this.ProductFavouriteService.createFavoute(
        this.productFavourite
      ).subscribe(
        (data) => {
          console.log(data);
          this.clickFavourite = true;
          this.clickFavourite1 = false;
          this.loadFavorite();
          // console.log("favourite success !");
        },
        (error) => console.log('favourite error : ' + error)
      );
    }
  }
  }

  updatereport() {
    if(this.AuthService.user_id() === "null"){
      const confirmDialog = this.dialog.open(FailDialogComponent, {
        data: {
          title: 'vui lòng đăng nhập !',
        },
      });
    } else{
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Bạn có muốn report bài này chứ ?',
          mesage: 'bạn cân làm lại ... !',
        },
      });
      confirmDialog.afterClosed().subscribe((result) => {
        if (result === true) {
          this.product.luotBaoCao = this.product.luotBaoCao + 1;
          console.log(this.product);
          console.log(this.id);
        this.productserviec.updatereport(this.id, this.product)
          .subscribe(data => {
       //  this.product= new Product();
        console.log(this.product);
        
         });
        }
  });
    }
   
  }
    
}
