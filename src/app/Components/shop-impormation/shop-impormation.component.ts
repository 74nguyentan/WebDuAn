import { Product } from 'src/app/model/Product';
import { ProductService } from './../../Service/product.service';
import { UserServiceService } from './../../Service/user-service.service';
import { Users } from './../../Model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../Service/auth.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-shop-impormation',
  templateUrl: './shop-impormation.component.html',
  styleUrls: ['./shop-impormation.component.css']
})
export class ShopImpormationComponent implements OnInit {
  // products = products;
  product: Product;
  Users: Users;
  page: number;
  id: number;
  constructor(
    public authService: AuthService,
    public Router: ActivatedRoute,
    public router: Router,
    public ngZone: NgZone,
    public UserServiceService: UserServiceService,
    public ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.Users = new Users();
    this.id = this.Router.snapshot.params['id'];
    // load user theo id
    this.UserServiceService.getUserById(this.id).subscribe(data => {
      this.Users = data;
    },
      error => console.log(error)
    )
    // load san pham theo id user
    this.ProductService.getidusers(this.id).subscribe(
      data => {
        this.product = data;
      },
      error => console.log(error)
    )
  }
  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
