import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AuthService } from 'src/app/Service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HistoryService } from 'src/app/Service/history.service';
import { Users } from 'src/app/Model/user';
import { History } from 'src/app/model/History';
import { FailDialogComponent } from 'src/app/Dialog/fail-dialog/fail-dialog.component';

@Component({
  selector: 'app-find-all-product',
  templateUrl: './find-all-product.component.html',
  styleUrls: ['./find-all-product.component.css']
})
export class FindAllProductComponent implements OnInit {

  products: Product;
  tenHang: string;
  history: History = new History();
  Users: Users;

  constructor(private route: ActivatedRoute,private router: Router,
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog,
    private productserviec: ProductService, public authService: AuthService,
     private historyservice: HistoryService,public AuthService: AuthService) { }

  ngOnInit(): void {
    this.tenHang = this.route.snapshot.params['tenHang'];
    console.log(this.tenHang);

    this.productserviec.getProduct1(this.tenHang)
    .subscribe(
      data => { data.length
        this.products = data;
        if(data.length == 0){
          const confirmDialog = this.dialog.open(FailDialogComponent, {
            data: {
              title: 'Không có mặt hàng này !',
            },
          });
          confirmDialog.afterClosed().subscribe((result) => {
            if (result === false) {
            }
      });
        }
      },
      error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['details', id]);
    this.history = new History();
    this.history.users = {};
    this.history.users.id = this.AuthService.user_id();
    this.history.matHang = {};
    this.history.matHang.id = id;
    console.log(this.history);
    this.historyservice.createhistory(this.history).subscribe(data => {
      console.log(data);
      this.history = new History();
      // this.refresh();
    },
      (error) => {
        console.log("er-----> : " + error);
      });

  }

}
