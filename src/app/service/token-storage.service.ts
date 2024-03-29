import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut(): void {
    //window.sessionStorage.clear();
   /* localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');*/
    localStorage.clear();
  }
  public saveToken(token: string): void {
    //window.sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
    //window.sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_KEY,token);
  }
  public getToken(): string | null {
    /*return window.sessionStorage.getItem(TOKEN_KEY);*/
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY,JSON.stringify(user));
    //window.sessionStorage.removeItem(USER_KEY);
    //window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    //const user = window.sessionStorage.getItem(USER_KEY);
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
