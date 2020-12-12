import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';
const CATEGORY_API = 'http://localhost:8000/greenmarket/api/category';
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
  constructor(
    private productservice: ProductService ,
    private router: Router,
    private CategoryService: CategoryService
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

