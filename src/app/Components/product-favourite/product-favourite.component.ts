import { Router } from '@angular/router';
import { AuthService } from './../../Service/auth.service';
import { ProductFavouriteService } from './../../Service/product-favourite.service';
import { productFavourite } from './../../model/productFavourite';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-favourite',
  templateUrl: './product-favourite.component.html',
  styleUrls: ['./product-favourite.component.css']
})
export class ProductFavouriteComponent implements OnInit {

  p: number;
productFavourite: productFavourite;

  constructor(
    private router: Router,
    private productFavouriteService: ProductFavouriteService,
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.productFavourite = new productFavourite();
    this.productFavouriteService.getidusers(this.AuthService.user_id()).subscribe(data=>{
      console.log(data);
      // this.productFavourite = Object.assign({}, ...data)
      this.productFavourite  = data
    })
  }
  productDetails(id: number){
    this.router.navigate(['details', id]);

  }

}
