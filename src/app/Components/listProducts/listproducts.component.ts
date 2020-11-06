import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loaihang } from 'src/app/model/Category';
import { Product } from 'src/app/model/Product';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';

// const PRODUCT_API = 'http://localhost:8989/api/mathang';
// const PRODUCT_API_ID = PRODUCT_API + '/mathangId'

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productserviec: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productserviec.getidloaihang(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
        console.log(this.product)
      }, error => console.log(error));

  }
  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
}