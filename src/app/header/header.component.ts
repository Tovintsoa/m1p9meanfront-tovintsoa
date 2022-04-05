import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";
import {Restaurant} from "../model/restaurant.model";
import {PanierService} from "../service/panier.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user ;
  panier : any ;
  constructor( private tokenStorage: TokenStorageService,private panierService:PanierService) {
    this.user = tokenStorage.getUser();

    if(null === this.tokenStorage.getToken()) {
      this.panier = 0;
    }
    else{

      this.panier = panierService.getNombrePanier(this.user.id).subscribe({
        next: (data) => {

          this.panier = data;

          /*this.panier = data;*/
        },
        error: (e) => console.error(e)
      })
    }


  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  logout():void{
    this.tokenStorage.signOut();
    this.reloadPage();
  }
  reloadPage(): void {
    window.location.reload();
  }
}
