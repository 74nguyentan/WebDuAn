import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/Service/product.service';

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