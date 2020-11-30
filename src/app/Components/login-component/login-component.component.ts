import { ForgetPasswordComponent } from './../../Dialog/forget-password/forget-password.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ComponentShareService } from './../../Service/component-share.service';
import { AuthService } from './../../Service/auth.service';
import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';

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

  constructor(
    @Inject(MatDialog) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    public authService: AuthService,
    public ComponentShareService: ComponentShareService,
    ) {}

  ngOnInit(): void {
    
  }

  login(userName,userPassword){
    this.authService.SignIn(userName,userPassword);
  }
  resetpass(){
    const confirmDialog = this.dialog.open(ForgetPasswordComponent, {

    });
  }

}
