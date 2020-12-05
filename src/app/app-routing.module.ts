import { ProductFavouriteComponent } from './Components/product-favourite/product-favourite.component';

import { AuthGuard } from './shared/guard/auth.guard';

import { ContactComponent } from './Components/contact/contact.component';
import { ListProductOfUserComponent } from './Components/list-product-of-user/list-product-of-user.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { ListproductsComponent } from './Components/listProducts/listproducts.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewsComponent } from './Components/product-news/product-news.component';
import {ToSellProductComponent} from './Components/to-sell-product/to-sell-product.component';
import {RegisterComponentComponent} from './Components/register-component/register-component.component';
import {UserImpormationComponent} from './Components/user-impormation/user-impormation.component'
import {SeenProductComponent} from './Components/seen-product/seen-product.component';
import {ShopImpormationComponent} from './Components/shop-impormation/shop-impormation.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { GitCardComponent } from './Components/git-card/git-card.component';
import { DiscountCodeComponent } from './Components/discount-code/discount-code.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'listProUser',
    component: ListProductOfUserComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
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
    component: ToSellProductComponent,canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponentComponent,
  },
  {
    path: 'impormation',
    component: UserImpormationComponent
  },
  {
    path: 'seen',
    component: SeenProductComponent
  },
  {
    path: 'details/:id',
     component: ProductDetailComponent
  },
  {
    path: 'update/:id',
     component: ToSellProductComponent
  },
  {
    path: 'loaihang/:id',
    component: ListproductsComponent
  },

  {
    path: 'mathang/:id',
    component: ListProductOfUserComponent
  },
  {
    path: 'shop/:id',
    component: ShopImpormationComponent
  },
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path: 'git-card',
    component: GitCardComponent
  },
  {
    path: 'discout-code',
    component: DiscountCodeComponent
  },
  {
    path: 'productFavourite',
    component: ProductFavouriteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
