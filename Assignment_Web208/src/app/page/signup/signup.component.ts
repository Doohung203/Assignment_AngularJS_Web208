import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IUser } from 'interfaces/user';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user  : IUser[] = []
  formSignup = this.formBuider.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  },)
  constructor(private formBuider: FormBuilder, private userService: UserService) {
  }
  checkPassword(form: FormGroup) {
    const password = form.get("password")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;

    if (password === confirmPassword) return null;
    return { notSame: true }
  }
  onHandleSubmit() {
    this.userService.addUser(this.formSignup.value as IUser).subscribe({
      next : (data) => {console.log(data)}
    })
  }

}
