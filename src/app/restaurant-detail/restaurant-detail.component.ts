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
  constructor(private platService : PlatService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getListePlat(this.route.snapshot.params["id"]);
  }
  getListePlat(idRestaurant:string){
    this.platService.getAllById(idRestaurant).subscribe({
      next:(data) =>{
        this.plat = data;
      },
      error:(e) => console.error(e)
    })
  }


}
