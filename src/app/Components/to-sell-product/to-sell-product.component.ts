import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';
import { CategoryService } from 'src/app/Service/category.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/Dialog/success-dialog/success-dialog.component';
import { FailDialogComponent } from 'src/app/Dialog/fail-dialog/fail-dialog.component';
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
    private route: ActivatedRoute,
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog) { }

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
      const confirmDialog = this.dialog.open(SuccessDialogComponent, {
        data: {
          title: 'Thành Công !',
        },
      });
    }, 
    (error) => {
      console.log(error);
      const confirmDialog = this.dialog.open(FailDialogComponent, {
        data: {
          title: 'Thất bại !',
          message: 'Vui lòng nhập đúng thông tin và thử lại !',
        },
      });
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
