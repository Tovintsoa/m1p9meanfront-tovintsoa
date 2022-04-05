import { Component, OnInit } from '@angular/core';
import {PanierService} from "../service/panier.service";
import {Panier} from "../model/panier.model";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panierListe! : any;
  user ;
  constructor(panierService:PanierService,private tokenStorage: TokenStorageService) {
    this.user = tokenStorage.getUser();
    if(null === this.tokenStorage.getToken()) {
      this.panierListe = {};
    }
    else {
      this.panierListe = panierService.getListePanier(tokenStorage.getUser().id).subscribe({
        next: (data) => {

          this.panierListe = data;
          console.log(data);
          /*this.panier = data;*/
        },
        error: (e) => console.error(e)
      })
    }
  }

  ngOnInit(): void {
  }

}
