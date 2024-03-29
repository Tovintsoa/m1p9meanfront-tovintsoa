import {Component, Input, OnInit} from '@angular/core';
import {PlatService} from "../service/plat.service";
import {Restaurant} from "../model/restaurant.model";
import {Plat} from "../model/plat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PanierService} from "../service/panier.service";
import {TokenStorageService} from "../service/token-storage.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  platL!: Plat[];
  taille = 0;
  error = "";
  isLoggedIn = false;
  closeResult = '';

  restaurant: Restaurant = new Restaurant();
  constructor(private modalService: NgbModal,private platService : PlatService,  private route: ActivatedRoute, private router: Router,private panierService:PanierService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.getListePlat(this.route.snapshot.params["id"]);
    this.getRestaurant(this.route.snapshot.params["id"]);
  }
  getListePlat(idRestaurant:string){
    this.platService.getAllById(idRestaurant).subscribe({
      next:(data) =>{

        this.platL = data;
        this.taille = this.platL.length
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
  ajouterPanier(idRestaurant:object,plat:object){
    console.log(idRestaurant);
    const data = {
      quantite : 1,
      plat: plat,
      netPayer:1000,
      restaurant:idRestaurant,
      utilisateur: this.tokenStorage.getUser().id
    };
    this.panierService.ajouterPanier(data).subscribe(
      response => {
        this.panierService.setPanier(this.tokenStorage);
      },
      error => {
        console.log(error.error.errors[0].msg);
        this.error = error.error.errors[0].msg;
      });
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
