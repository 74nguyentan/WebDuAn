import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { ListproductsComponent } from './Components/listProducts/listproducts.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'login',
    component: LoginComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
