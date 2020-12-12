import { Router } from '@angular/router';
import { AuthService } from './../../Service/auth.service';
import { ProductFavouriteService } from './../../Service/product-favourite.service';
import { productFavourite } from './../../model/productFavourite';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';


const CATEGORY_API = 'http://localhost:8000/greenmarket/api/category';
@Component({
  selector: 'app-product-favourite',
  templateUrl: './product-favourite.component.html',
  styleUrls: ['./product-favourite.component.css']
})
export class ProductFavouriteComponent implements OnInit {

  p: number;
productFavourite: productFavourite;
public category: Array<any>;
  products: Product = new Product();

  constructor(
    private router: Router,
    private productFavouriteService: ProductFavouriteService,
    private AuthService: AuthService,
    private CategoryService: CategoryService,
    private productservice: ProductService
  ) { }

  ngOnInit(): void {
    this.productFavourite = new productFavourite();
    this.productFavouriteService.getidusers(this.AuthService.user_id()).subscribe(data=>{
      console.log(data);
      // this.productFavourite = Object.assign({}, ...data)
      this.productFavourite  = data
    })

    this.CategoryService.getAll(CATEGORY_API).subscribe((data) => {
      this.category = data;
    });
  }
  productDetails(id: number){
    this.router.navigate(['details', id]);

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
