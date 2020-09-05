import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  imageUrLogin =
  'https://drive.google.com/uc?export=download&id=1esCte0GllXVR0jiPEdH_yfEigX_9ThW-';
title='login-component';
  constructor() { }

  ngOnInit(): void {
  }

}
