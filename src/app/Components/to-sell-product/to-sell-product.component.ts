import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';
import { CategoryService } from 'src/app/Service/category.service';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { AuthService } from 'src/app/Service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/Dialog/success-dialog/success-dialog.component';
import { FailDialogComponent } from 'src/app/Dialog/fail-dialog/fail-dialog.component';
import { Users } from 'src/app/Model/user';
import { CookieService } from 'ngx-cookie-service';
// import { FileUploader } from "angular-file-upload";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
const CATEGORY_API = 'http://localhost:8000/greenmarket/api/category';

export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return users.includes(c.value) ? { invalidusername: true } : null;
  };
}

@Component({
  selector: 'app-to-sell-product',
  templateUrl: './to-sell-product.component.html',
  styleUrls: ['./to-sell-product.component.css']
})

export class ToSellProductComponent implements OnInit {

  proform: FormGroup;
  products: Product = new Product();
  users: Users = new Users();
  public category: Array<any>;
  id: number;

  base64textString = [];

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  constructor(private router: Router,
    private productserviec: ProductService, private CategoryService: CategoryService,
    private route: ActivatedRoute, private UserServiceService: UserServiceService,
    private AuthService: AuthService,
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog,
    private fb: FormBuilder) { }


  submitted = false;

  ngOnInit(): void {
    // check



    this.CategoryService.getAll(CATEGORY_API).subscribe(data => {
      this.category = data;
    })

    this.products = new Product();


    this.id = this.route.snapshot.params['id'];

    this.productserviec.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.products = data;
      },(error) => {
        console.log("er-----> : "+ error);
      });
  }
  scroll(el: HTMLElement) {

    el.scrollIntoView({ behavior: 'smooth' });

  }

  newEmployee(): void {
    this.submitted = false;
    this.products = new Product();
  }

  save() {
    this.products.users = {};
    this.products.users.id = this.AuthService.user_id();
    this.products.hinh0 = this.base64textString[0];
    this.products.hinh1 = this.base64textString[1];
    this.products.hinh2 = this.base64textString[2];
    this.products.hinh3 = this.base64textString[3];

    this.productserviec
      .createproduct(this.products).subscribe(data => {
        // console.log(this.products)
        // console.log(data)

        this.products = new Product();
        const confirmDialog = this.dialog.open(SuccessDialogComponent, {
          data: {
            title: 'Thành Công !',
          },
        });
        confirmDialog.afterClosed().subscribe((result) => {
          if (result === false) {
            // this.refresh();
          }
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

  updateproduct() {
     this.base64textString[0] == this.products.hinh0;
     this.base64textString[1] = this.products.hinh1;
     this.base64textString[2] = this.products.hinh2;
    this.base64textString[3] = this.products.hinh3;
    this.productserviec.updateProduct(this.id, this.products)
      .subscribe(data => {
    this.products = new Product();
    const confirmDialog = this.dialog.open(SuccessDialogComponent, {
      data: {
        title: 'Cập nhật Thành Công !',
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
    if(this.products.id = this.products.id){
      this.updateproduct();
    }
    else {
      this.save();
    }
  }

  refresh(): void {
    window.location.reload();
}

}
