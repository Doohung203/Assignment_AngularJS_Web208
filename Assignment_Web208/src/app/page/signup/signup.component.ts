import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formSignup = this.formBuider.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  },)
  constructor(private formBuider: FormBuilder) {
  }

  checkPassword() {

  }

}
