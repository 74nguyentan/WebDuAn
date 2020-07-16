import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { ListproductsComponent } from './Components/listProducts/listproducts.component';
import { NavComponent } from './Layouts/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


library.add(faCoffee);
@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
    FooterComponent,
    ListproductsComponent,
    NavComponent

  ],
  imports: [BrowserModule, AppRoutingModule,FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
