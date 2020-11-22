import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-list-product-of-user',
  templateUrl: './list-product-of-user.component.html',
  styleUrls: ['./list-product-of-user.component.css']
})
export class ListProductOfUserComponent implements OnInit {
  id: string;
  product: Product;
  constructor(private route: ActivatedRoute,private router: Router,
    private productserviec: ProductService, public authService: AuthService) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.authService.user_id();
    
    this.productserviec.getidusers(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
        console.log(this.product)
      }, error => console.log(error));
  }

  
}
