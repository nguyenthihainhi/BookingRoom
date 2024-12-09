import { Component, OnInit } from '@angular/core';
import { icons } from '../../../core/config/icons.config';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../../../core/services/loading.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-other-login',
  templateUrl: './other-login.component.html',
  styleUrl: './other-login.component.css'
})
export class OtherLoginComponent implements OnInit {
  icons = icons;
  isSubmitForm: boolean = false;


  loginForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private _loading: LoadingService

  ) { }

  ngOnInit(): void {
    console.log(this.isSubmitForm);
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.isSubmitForm = loading;
      });
  }



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


  get isBtnDisable() {
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

    // if (emailEntered && passwordEntered){
    //   this.authService.loginWithFull({ email: emailEntered, password: passwordEntered }).subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.router.navigate(['/admin/manage-user']);
    //     },
    //     error: (error) => {
    //       this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Thông báo có sự cố trong việc đăng nhập' });
    //     }
    //   })
    // }
      this.authService.testLogin({ username: 'emilys', password: 'emilyspass', expiresInMins: 5 }).subscribe({
        next: (res) => {
          console.log(res);
          // this.router.navigate(['/admin/manage-user']);
          this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Chào người quen' });

        },
        error: (error) => {
        }
      })


  }


}
