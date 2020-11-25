import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AuthService } from 'src/app/Service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-product-of-user',
  templateUrl: './list-product-of-user.component.html',
  styleUrls: ['./list-product-of-user.component.css']
})
export class ListProductOfUserComponent implements OnInit {
  id: string;
  product: Product;


  constructor(private route: ActivatedRoute,private router: Router,
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog,
    private productserviec: ProductService, public authService: AuthService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.product = new Product();

    this.id = this.authService.user_id();

    this.productserviec.getidusers(this.id)
      .subscribe(data => {
        console.log(data);
        this.product = data;
        console.log(this.product);
      }, error => console.log(error));
  }

  deleteProduct(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Bạn có muốn xóa ?',
        mesage: 'bạn cân làm lại ... !',
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
   this.productserviec.deleteproduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
});


  }

  updateproduct(id: number){
    this.router.navigate(['update', id]);
    console.log(id);
  }
}
