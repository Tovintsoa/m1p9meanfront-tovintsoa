import { Injectable } from '@angular/core';
import { Plat } from '../model/plat.model';
import {Restaurant} from "../model/restaurant.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'https://m1p9mean-tovintsoa.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }
  getAllById(idRestaurant:string): Observable<Plat[]> {
    return this.http.get<Restaurant[]>(baseUrl + "plat/"+idRestaurant);
  }
  getRestaurant(idRestaurant:string):Observable<Restaurant>{
    return this.http.get<Restaurant>(baseUrl + "restaurant/"+idRestaurant);
  }
}
