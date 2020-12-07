import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AuthService } from 'src/app/Service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Dialog/confirm-dialog/confirm-dialog.component';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-find-all-product',
  templateUrl: './find-all-product.component.html',
  styleUrls: ['./find-all-product.component.css']
})
export class FindAllProductComponent implements OnInit {

  product: Product;

  onKey(tenHang: any) { // without type info
    this.findbyname(tenHang);
  }
  constructor(private route: ActivatedRoute,private router: Router,
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog,
    private productserviec: ProductService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  findbyname(tenHang: any){
    this.product = new Product();
    this.productserviec.getProduct1(tenHang)
    .subscribe(
      data => {
        this.product = data;
        console.log(data);
      },
      error => console.log(error));
    }

}
