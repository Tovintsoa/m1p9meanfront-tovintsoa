import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant.model';
import {environment} from "../../environments/environment";
const baseUrl = environment.apiUrl+'/';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService
{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(baseUrl + "restaurant");
  }

  get(id: any): Observable<Restaurant> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
