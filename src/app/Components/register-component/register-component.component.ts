import { AuthService } from './../../Service/auth.service';
import { FailDialogComponent } from './../../Dialog/fail-dialog/fail-dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { UserServiceService } from './../../Service/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../Dialog/success-dialog/success-dialog.component';
import { RegistDialogComponent } from '../../Dialog/regist-dialog/regist-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../Model/user';

export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return users.includes(c.value) ? { invalidusername: true } : null;
  };
}

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.matKhau === v.confirmPassword
    ? null
    : {
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
  sdt = false;

  // check form cách 1: check trống và định dạng sdt và email
  get primEmail() {
    return this.check.get('email');
  }
  get phone() {
    return this.check.get('dienThoai');
  }
  check = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    dienThoai: new FormControl('', [
      Validators.required,
      Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MatDialog) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserServiceService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    //set trống form
    this.Users = new Users();
    this.Users.hoVaTen = '';
    this.Users.diaChiUser = '';
    this.Users.matKhau = '';
    // this.Users.dienThoai='';
    // this.Users.email='';

    // check form cách 2: check trống và kiểm tra trùng password
    this.form = this.fb.group({
      hoVaTen: ['',[Validators.required, forbiddenUsername(['', 'admin', 'manager'])],],
      diaChiUser: ['',[Validators.required, forbiddenUsername([''])],],
      // dienThoai: ['',[Validators.required, forbiddenUsername([''])],],
      // email: ['',[Validators.required, forbiddenUsername([''])],],
      pw: this.fb.group(
        {
          matKhau: ['', [Validators.required, forbiddenUsername([''])]],
          confirmPassword: ['', [Validators.required, forbiddenUsername([''])]],
        },
        {
          validator: comparePassword,
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
        if (this.Users.matKhau === this.Users.xacNhanMatKhau) {
          var emailTest = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (emailTest.test(this.Users.email) == true) {
            var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (vnf_regex.test(this.Users.dienThoai) == true) {
              this.Users.vaiTro = false;
              this.userService.createUser(this.Users).subscribe(
                (data) => {
                  console.log(data);
                  this.authService.SignUp(this.Users.email, this.Users.matKhau);
                  this.Users = new Users();
                  const confirmDialog = this.dialog.open(SuccessDialogComponent, {
                    data: {
                      title: 'Thành Công !',
                      message:'Một email chứa mã xác nhận đã được gửi tới bạn'
                    },
                  });
                  // this.router.navigate(['login']);
                },
                (error) => {
                  console.log('error ----> : ' + error);
                  const confirmDialog = this.dialog.open(FailDialogComponent, {
                    data: {
                      title: 'Thất bại !',
                      message: 'Vui lòng nhập đúng thông tin và thử lại !',
                    },
                  });
                }
              );
            } else {
              this.sdt = true;
              const confirmDialog = this.dialog.open(FailDialogComponent, {
                data: {
                  title: 'Thất bại !',
                  message: 'Số điện thoại của bạn không đúng !',
                },
              });
            }
          } else {
            this.sdt = true;
            const confirmDialog = this.dialog.open(FailDialogComponent, {
              data: {
                title: 'Thất bại !',
                message: 'Nhập đúng định dạng email !',
              },
            });
          }
        } else {
          this.sdt = true;
          const confirmDialog = this.dialog.open(FailDialogComponent, {
            data: {
              title: 'Thất bại !',
              message: 'Nhập đúng mật khẩu !',
            },
          });
        }


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
