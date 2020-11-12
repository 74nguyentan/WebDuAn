import { ComponentShareService } from './../../Service/component-share.service';
import { AuthService } from './../../Service/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  imageUrLogin =
    'https://drive.google.com/uc?export=download&id=1esCte0GllXVR0jiPEdH_yfEigX_9ThW-';
  title = 'login-component';
isLogin: boolean = false;

  constructor(public authService: AuthService, public ComponentShareService: ComponentShareService) {}

  ngOnInit(): void {}

  login(userName,userPassword){
    this.ComponentShareService.notifyCountValue(this.isLogin = true);
    this.authService.SignIn(userName,userPassword);

  }
}
