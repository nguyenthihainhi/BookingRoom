import { Component } from '@angular/core';
import { icons } from '../../../core/config/icons.config';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-other-login',
  templateUrl: './other-login.component.html',
  styleUrl: './other-login.component.css'
})
export class OtherLoginComponent {
  icons = icons;

  loginForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private formbuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  /**method: get email
   * paramerter: no parameter
   * puporse: take email from instance loginForm
   */
  get email(): FormControl<string | null> {
    return this.loginForm.get('email') as FormControl;
  }

  /**method: get passowrd
   * paramerter: no parameter
   * puporse: take password from instance loginForm
   */
  get password(): FormControl<string | null> {
    return this.loginForm.get('password') as FormControl;
  }

  /**method: get emailIsValid
   * paramerter: no parameter
   * return: type boolean
   * puporse: Check email is touched?, is diry?, is invalid?
   */
  get emailIsValid() {
    return (
      this.email.touched && this.email.dirty && this.email.invalid
    )
  }

  /**method: get passwordIsValid
   * paramerter: no parameter
   * return: type boolean
   * puporse: Check password is touched?, is diry?, is invalid?
   */
  get passwordIsValid() {
    return (
      this.password.touched && this.password.dirty && this.password.invalid
    )
  }


  get isBtnDisable(){
    return (
      this.email.valid && this.password.valid && this.emailIsValid && this.passwordIsValid
    )
  }


  /**method: get passwordIsValid
   * paramerter: no parameter
   * return:  not return any value
   * puporse: This function handles the form submission process.
   */
  formSubmiited() {
    const emailEntered = this.email.value;
    const passwordEntered = this.password.value;

    if (emailEntered && passwordEntered)
      this.authService.loginWithFull({ email: emailEntered, password: passwordEntered }).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/manage-user']);
        },
        error: (error) => {
          alert('Thông báo có sự cố trong việc đăng nhập: ' + error.message);
        }
      })
  }


}
