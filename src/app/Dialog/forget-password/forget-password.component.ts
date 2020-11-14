import { AuthService } from './../../Service/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject, DoCheck } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, DoCheck {

  reset:boolean;

  constructor(
    public authService: AuthService,
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) { }

  ngOnInit(): void {
  }
ngDoCheck(){
  this.reset = this.authService.reset;
}
}
