import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  // product: products;
  p: number;
  products: Product = new Product();
  constructor(private productservice: ProductService , private router: Router) { }

  ngOnInit(): void {
    this.loadall();
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

}

