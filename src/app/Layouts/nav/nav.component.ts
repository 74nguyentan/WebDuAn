import { ComponentShareService } from './../../Service/component-share.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Service/auth.service';
import { HistoryService } from 'src/app/Service/history.service';
import { History } from 'src/app/model/History';


const CATEGORY_API = 'http://localhost:8000/greenmarket/api/category';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy{
  public category: Array<any>;
  history: History = new History();
  id: string;
  count : number;

  imagerUrl =
    'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn&quot;';
  imageUrl1 =
    'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn&quot;';
  imageUrl2 =
    'https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn&quot;';
  imageUrl3 =
    'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn&quot;';
  imageUrl4 =
    'https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn&quot;';
  imageUrl5 =
    'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn&quot;';
  imageUrl6 =
    'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn&quot;';
  imageUrl7 =
    'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn&quot;';
  imageUrl8 =
    'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn&quot;';
  imageUrl9 =
    'https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn&quot;';
  imageUrlLogoo =
    // 'https://drive.google.com/uc?export=download&id=1KKAgJ92TD0pk1z51TPMnlY03aXxYRouJ';
    // 'https://drive.google.com/uc?export=download&id=1XgxLjFjfx0mgtsO4a6IFCAFyq5zAe2fP';
    // 'https://drive.google.com/uc?export=download&id=1Od1WIhRJ9E_WW50dNvJnxMFrRYGmfyxB';
    'https://drive.google.com/uc?export=download&id=1BHdFaUB1pypfuHOGRgBdgXZtWpwPS4fS';
  imageUrl11 = '';
  login = false;
  role = 0;
  private valueFromChildSubscription: Subscription;


  constructor(
    private componentShareService: ComponentShareService,
    private CategoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    public authService: AuthService,
    private historyservice: HistoryService
  ) {
    this.CategoryService.getAll(CATEGORY_API).subscribe((data) => {
      this.category = data;});
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang('vi');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/vi|en/) ? browserLang : 'vi');


  }
  ngDoCheck(){
    this.login=this.authService.isLoggedIn;

    // this.reload();
  }

  ngOnInit(): void {

   console.log(this.authService.user_id());

    this.valueFromChildSubscription = this.componentShareService.ValueFromChild.subscribe(
      (data) => {
        this.login = data;
      }
    );
    this.reload();
  }
  public ngOnDestroy() {
    this.valueFromChildSubscription.unsubscribe();

  }

  idloaihang(id: number) {
    this.router.navigate(['loaihang', id]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  idusers(id: string){
    this.router.navigate(['mathang', id]);
  }

  reload(){
    this.history = new History();
    this.id = this.authService.user_id();
    this.historyservice.getHistory(this.id).subscribe(data => {
      this.history = data;
      this.count = data.length;
      this.history = data.filter((value,i) => i <= 2);
      console.log(this.history);
    }, error => console.log(error));
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  productfind(tenHang: string) {
    this.router.navigate(['findAllProduct', tenHang]);

  }


  refresh(): void {
    window.location.reload();
}

deletehistory(){
  this.history = new History();
    this.id = this.authService.user_id();
    this.historyservice.deleteHistory(this.id).subscribe(data => {
      this.history = data;
    }, error => console.log(error));
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
}
}
