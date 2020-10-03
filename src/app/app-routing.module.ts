import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { ListproductsComponent } from './Components/listProducts/listproducts.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewsComponent } from './Components/product-news/product-news.component';
import {ToSellProductComponent} from './Components/to-sell-product/to-sell-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'listNew',
    component: ListproductsComponent,
  },
  {
    path: 'proDetaill',
    component: ProductDetailComponent,
  },
  {
    path: 'pronews',
    component: ProductNewsComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'toSell',
    component: ToSellProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
