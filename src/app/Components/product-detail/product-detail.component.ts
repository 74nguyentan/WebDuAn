import { Comment } from './../../model/Comment';
import { CommentService } from './../../Service/comment.service';

import { Component, OnInit } from '@angular/core';
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
  // img_1: string =
  //   '//vn-test-11.slatic.net/p/df5c3f569917f9b2d59d802e22ffc485.jpg_340x340q80.jpg_.webp';
  // img_2: string =
  //   '//vn-test-11.slatic.net/p/6684de7c5cf45722fce698dfb31eb185.jpg_340x340q80.jpg_.webp';
  // img_3: string =
  //   '//vn-test-11.slatic.net/p/d9e21933b863bb9670d0bea35b9736dc.jpg_340x340q80.jpg_.webp';
  // img_4: string =
  //   '//vn-test-11.slatic.net/p/0c71728ea3a5a3e2aa7243728de12ef9.jpg_340x340q80.jpg_.webp';
  id: number;
  product: Product;
  comment: Comment;
  comments:[];
  img_0;
  img_1;
  img_2;
  img_3;

  // submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private productserviec: ProductService, private commentservice: CommentService) { }

  ngOnInit() {
    this.product = new Product();
    this.comment = new Comment();

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
    this.commentservice.get('http://localhost:8000/greenmarket/api/idmathang/', this.id).subscribe(data => {
      console.log(data);
      this.comments = data;
    })

  }

  save() {
    console.log( "idUse____>>>" + this.comment.users);
    console.log( "idmh____>>>" + this.comment.Mathang);
    console.log( "nd____>>>" + this.comment.noiDungBinhLuan);

    this.commentservice.createComment(this.comment).subscribe(data => {
      console.log("us---->" +this.comment.users)
      console.log(data)
      this.comment = new Comment();
    },
    (error) => {
      console.log("er-----> : "+ error);
    });
  }



  // hover0() {
  //   this.img_zoom = this.img_0;
  // }
  // hover1() {
  //   this.img_zoom = this.img_1;
  // }
  // hover2() {
  //   this.img_zoom = this.img_2;
  // }
  // hover3() {
  //   this.img_zoom = this.img_3;
  // }
  // // hover2() {
  // //   this.img_zoom = this.img_2;
  // // }
}
