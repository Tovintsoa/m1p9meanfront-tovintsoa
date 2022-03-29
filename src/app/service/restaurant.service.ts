import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant.model';
const baseUrl = 'https://m1p9mean-tovintsoa.herokuapp.com/';
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
