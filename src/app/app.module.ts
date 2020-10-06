import { ProductNewsComponent } from './Components/product-news/product-news.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { ListproductsComponent } from './Components/listProducts/listproducts.component';
import { NavComponent } from './Layouts/nav/nav.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FilterComponent } from './Layouts/filter/filter.component';
import { AdvertisementComponent } from './Layouts/advertisement/advertisement.component';
import { NgxImgZoomModule  } from 'ngx-img-zoom';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToSellProductComponent } from './Components/to-sell-product/to-sell-product.component';
import {RegisterComponentComponent} from './Components/register-component/register-component.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    FooterComponent,
    ListproductsComponent,
    NavComponent,
    HomePageComponent,
    FilterComponent,
    ProductDetailComponent,
    AdvertisementComponent,
    ProductNewsComponent,
    ToSellProductComponent,
    RegisterComponentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxImgZoomModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}


