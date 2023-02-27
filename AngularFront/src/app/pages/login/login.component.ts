import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    });
  }
  ngOnInit() { }
  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        console.log("resultado:")
        console.log(result);
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['/home/main-page']);
      }
    );
  }
  // Handle response
  responseHandler(data: any) {
    console.log(data)
    this.token.handleData(data.access_token);
  }

}
