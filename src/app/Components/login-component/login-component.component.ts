import { AuthService } from './../../Service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  imageUrLogin =
  'https://drive.google.com/uc?export=download&id=1esCte0GllXVR0jiPEdH_yfEigX_9ThW-';
title='login-component';
  constructor(  public authService: AuthService) { }

  ngOnInit(): void {
  }

}
