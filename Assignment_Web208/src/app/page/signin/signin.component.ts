import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formSignIn = this.formBuider.group({
    email : ["", [Validators.required, Validators.email]],
    password : ["",[Validators.required, Validators.minLength(6)]]
  })
  constructor(private formBuider: FormBuilder){}
}
