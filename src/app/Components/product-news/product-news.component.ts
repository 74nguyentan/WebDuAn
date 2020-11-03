import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-news',
  templateUrl: './product-news.component.html',
  styleUrls: ['./product-news.component.css']
})
export class ProductNewsComponent implements OnInit {

  products: Observable<Product[]>;
  constructor(private productserviec: ProductService,
    private router: Router) { }
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.products = this.productserviec.getProductList();
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
}