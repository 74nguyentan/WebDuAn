import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';




export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return users.includes(c.value) ? { invalidusername: true } : null;
  };
}

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword ? null: {
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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['',[Validators.required, forbiddenUsername(['','admin', 'manager'])],],
      phone: ['',[Validators.required, forbiddenUsername([''])],],
      adrest: ['',[Validators.required, forbiddenUsername([''])],],
      email: ['',[Validators.required, forbiddenUsername([''])],],
      pw: this.fb.group(
        {
          password: ['',[Validators.required, forbiddenUsername([''])],],
          confirmPassword: ['',[Validators.required, forbiddenUsername([''])],],
        },
        {
          validator: comparePassword
        }
      ),
    });
  }
}
