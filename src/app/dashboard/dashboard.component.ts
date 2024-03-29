import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../model/restaurant.model";
import {RestaurantService} from "../service/restaurant.service";
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  restaurant!: Restaurant[];
  private url = environment.apiUrl;
  constructor(private restaurantService : RestaurantService){
    console.log(environment.apiUrl);
  }
  ngOnInit() {
    this.getListRestaurant();
  }
  getListRestaurant(): void {
    this.restaurantService.getAll().subscribe({
      next:(data) =>{
        this.restaurant = data;
        console.log(data);
      },
      error:(e) => console.error(e)
    })
  }

}
