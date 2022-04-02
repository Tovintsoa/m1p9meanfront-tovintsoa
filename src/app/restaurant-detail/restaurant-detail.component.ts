import {Component, Input, OnInit} from '@angular/core';
import {PlatService} from "../service/plat.service";
import {Restaurant} from "../model/restaurant.model";
import {Plat} from "../model/plat.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  plat!: Plat[];
  restaurant: Restaurant = new Restaurant();
  constructor(private platService : PlatService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getListePlat(this.route.snapshot.params["id"]);
    this.getRestaurant(this.route.snapshot.params["id"]);
  }
  getListePlat(idRestaurant:string){
    this.platService.getAllById(idRestaurant).subscribe({
      next:(data) =>{
        console.log('aaa');
        console.log(data);
        this.plat = data;
      },
      error:(e) => console.error(e)
    })
  }
  getRestaurant(idRestaurant:string){
    this.platService.getRestaurant(idRestaurant).subscribe({
      next:(data) =>{

        this.restaurant = data;
      },
      error:(e) => console.error(e)
    })
  }


}
