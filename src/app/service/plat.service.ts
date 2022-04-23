import { Injectable } from '@angular/core';
import { Plat } from '../model/plat.model';
import {Restaurant} from "../model/restaurant.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }
  getAllById(idRestaurant:string): Observable<Plat[]> {
    return this.http.get<Restaurant[]>(baseUrl + "/plat/"+idRestaurant);
  }
  getRestaurant(idRestaurant:string):Observable<Restaurant>{
    return this.http.get<Restaurant>(baseUrl + "/restaurant/"+idRestaurant);
  }
}
