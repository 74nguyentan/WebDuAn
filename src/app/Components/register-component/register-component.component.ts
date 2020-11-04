import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup,Validators,FormBuilder, AbstractControl,} from '@angular/forms';
import { UserServiceService } from './../../Service/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../Dialog/success-dialog/success-dialog.component';
import { RegistDialogComponent } from '../../Dialog/regist-dialog/regist-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../Model/Users';

export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return users.includes(c.value) ? { invalidusername: true } : null;
  };
}

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.matKhau === v.confirmPassword ? null: {
    passwordnotmatch: true,
      };
}



@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
})

export class RegisterComponentComponent implements OnInit {
  imageUrLogin =
    'https://drive.google.com/uc?export=download&id=1esCte0GllXVR0jiPEdH_yfEigX_9ThW-';

  title = 'login-component';
  form: FormGroup;
  Users: Users;


  constructor(private fb: FormBuilder,
    @Inject(MatDialog) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserServiceService) {}

  ngOnInit() {
    this.Users = new Users();
    this.form = this.fb.group({
      hoVaTen: ['',[Validators.required, forbiddenUsername(['','admin', 'manager'])],],
      dienThoai: ['',[Validators.required, forbiddenUsername([''])],],
      diaChiUser: ['',[Validators.required, forbiddenUsername([''])],],
      email: ['',[Validators.required, forbiddenUsername([''])],],
      pw: this.fb.group(
        {
          matKhau: ['',[Validators.required, forbiddenUsername([''])],],
          confirmPassword: ['',[Validators.required, forbiddenUsername([''])],],
        },
        {
          validator: comparePassword
        }
      ),
    });
  }
  saveOrUpdate() {
    const confirmDialog = this.dialog.open(RegistDialogComponent, {
      data: {
        title: 'CHÍNH SÁCH VÀ ĐIỀU KHOẢN SỬ DỤNG',
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {

        this.userService.createUser(this.Users).subscribe(
          (data) => {
            console.log(data);
            this.Users = new Users();

            const confirmDialog = this.dialog.open(SuccessDialogComponent, {
              data: {
                title: 'Thành Công !',
              },
            });
          },
          (error) => console.log(error)
        );
      }
    });
  }



  onSubmit() {
    this.saveOrUpdate();
  }
  // gotoList() {
  //   this.router.navigate(['']);
  // }
}
