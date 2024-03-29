import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles = String;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  logout():void{
    this.tokenStorage.signOut();
    this.reloadPage();
  }
  reloadPage(): void {
    window.location.reload();
  }

}
