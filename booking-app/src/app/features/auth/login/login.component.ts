import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider, GoogleSigninButtonModule } from "@abacritt/angularx-social-login";
import { icons } from '../../../core/config/icons.config';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ExternalLogin } from '../../../core/models/externalLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;
  userInfor: ExternalLogin = new ExternalLogin;
  private accessToken = '';
  icons = icons;
  authSubscription!: Subscription;
  items = [
    { image: 'assets/images/login_slide_1.jpg' },
    { image: 'assets/images/login_slide_2.jpg' },
    { image: 'assets/images/login_slide_3.jpg' },
    { image: 'assets/images/login_slide_4.jpg' },
    { image: 'assets/images/login_slide_5.jpg' },
  ];
  activeIndex = 0;
  intervalId: any;
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService : SocialAuthService ,
    private authenticationService : AuthenticationService,
    
  ) {}
  
  ngOnInit(): void {
      this.authService.authState.subscribe((user) => {
        console.log(user);
        this.user = user;
        this.userInfor.provider = this.user.provider;
        this.userInfor.idToken = this.user.idToken;
        this.loggedIn = (user != null);
      });
      this.authenticationService.TakeToken(this.userInfor).subscribe((data: any) => {
        console.log(data);
      })
      this.startCarousel();
  }
  // getAccessToken(): void {
  //   this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  // }
  // refreshToken(): void {
  //   this.authService.refreshAccessToken(GoogleLoginProvider.PROVIDER_ID);
  // }
  googleSignin(googleWrapper: any) {
    googleWrapper.click();
  }
  // run carousel change slide each 2 seconds
  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
    }, 2000); // Change every 2 seconds
  }

}
