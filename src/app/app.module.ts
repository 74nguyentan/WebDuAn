import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './Layouts/footer/footer.component';
import { ListproductsComponent } from './Components/listProducts/listproducts.component';
import { NavComponent } from './Layouts/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoginComponentComponent } from './Components/login-component/login-component.component';


library.add(faCoffee);
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListproductsComponent,
    NavComponent,
    LoginComponentComponent

  ],
  imports: [BrowserModule, AppRoutingModule,FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
