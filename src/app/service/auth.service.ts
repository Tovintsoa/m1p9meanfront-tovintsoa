import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const AUTH_API = environment.apiUrl+'/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(mail:string,password:string):Observable<any>{
    return this.http.post(AUTH_API + 'signin',{
      mail,
      password
    },httpOptions)
  }
}
