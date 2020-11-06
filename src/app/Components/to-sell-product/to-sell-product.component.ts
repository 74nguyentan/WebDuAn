import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';
import { CategoryService } from 'src/app/Service/category.service';
// import { FileUploader } from "angular-file-upload";

const CATEGORY_API = 'http://localhost:8989/api/category';
@Component({
  selector: 'app-to-sell-product',
  templateUrl: './to-sell-product.component.html',
  styleUrls: ['./to-sell-product.component.css']
})
export class ToSellProductComponent implements OnInit {

  products: Product = new Product();
  public category: Array<any>;

  constructor(private router: Router,
    private productserviec: ProductService, private CategoryService: CategoryService,
    private route: ActivatedRoute) { }

    submitted = false;
  ngOnInit(): void {
    this.CategoryService.getAll(CATEGORY_API).subscribe(data => {
      this.category = data;
    })
  }
  scroll(el: HTMLElement) {

    el.scrollIntoView({behavior: 'smooth'});

  }

  newEmployee(): void {
    this.submitted = false;
    this.products = new Product();
  }

  save() {
    console.log(this.products);
    
    this.productserviec
    .createproduct(this.products).subscribe(data => {
      console.log(this.products)
      console.log(data)
      this.products = new Product();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
