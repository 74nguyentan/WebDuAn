import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Component/header-component/header-component.component';
import { FooterComponentComponent } from './Component/footer-component/footer-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { ListProductsComponent } from './Component/list-products/list-products.component';
import { ListproductsComponent } from './Components/listproducts/listproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LoginComponentComponent,
    HeaderComponent,
    FooterComponent,
    ListProductComponent,
    ListProductsComponent,
    ListproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
