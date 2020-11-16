import { FailDialogComponent } from './../../Dialog/fail-dialog/fail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './../../Dialog/success-dialog/success-dialog.component';
import { AuthService } from './../../Service/auth.service';

import { Users } from './../../Model/user';
import { UserServiceService } from './../../Service/user-service.service';
import { Component, OnInit, DoCheck, Inject } from '@angular/core';

@Component({
  selector: 'app-user-impormation',
  templateUrl: './user-impormation.component.html',
  styleUrls: ['./user-impormation.component.css'],
})
export class UserImpormationComponent implements OnInit {
  isShowFormUser = false;
  users: Users;

  constructor(
    public UserServiceService: UserServiceService,
    @Inject(MatDialog) public data: any,
    private dialog: MatDialog,
    public AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.users = new Users();
    this.UserServiceService.getUserByEmail(this.AuthService.userData.email).subscribe(
      (data) => {
        this.users = data;
        console.log("user ------->>" + this.users);
        console.log("user dt ------->>" + this.users.dienThoai);
      },
      (error) => console.log('er ---> ' + error)
    );
  }

  UpdateUser(id:any, hoVaTen:string, matKhau:string, email:string, dienThoai:string, diaChiUser:string) {
   this.users.id = id;
    this.users.hoVaTen = hoVaTen;
    this.users.matKhau = matKhau;
    this.users.email=email;
    this.users.diaChiUser=diaChiUser;
    this.users.dienThoai=dienThoai;
    console.log("uppp dc------------------" +this.users.diaChiUser);
    console.log("uppp------------------" +this.users.dienThoai);


    this.UserServiceService.updateUser(this.users.id, this.users).subscribe(
      (data) => {
        this.users = new Users();
        this.isShowFormUser = false;
        const confirmDialog = this.dialog.open(SuccessDialogComponent, {
          data: {
            title: 'Thành Công !',
          },
        });
      },
      (error) => {
        console.log("er user ---------= "+error);
        console.log('er iddd----' + this.users.id);
        console.log('er iddd name----' + this.users.hoVaTen);
        const confirmDialog = this.dialog.open(FailDialogComponent, {
          data: {
            title: 'Thất bại !',
          },
        });
      }
    );
  }


  // UpdateUser(id:any, hoVaTen:string, matKhau:string, email:string, dienThoai:string, diaChiUser:string) {
  //   this.users.id = id;
  //    this.users.hoVaTen = hoVaTen;
  //    this.users.matKhau = matKhau;
  //    this.users.email=email;
  //    this.users.diaChiUser=diaChiUser;
  //    this.users.dienThoai=dienThoai;
  //    console.log("uppp dc------------------" +this.users.diaChiUser);
  //    console.log("uppp------------------" +this.users.dienThoai);


  //    this.UserServiceService.updateUser(this.users.id, this.users).subscribe(
}
