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
  user! : any ;
  total = 0 ;
  constructor(private panierService:PanierService,private tokenStorage: TokenStorageService) {

  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    if(null === this.tokenStorage.getToken()) {
      this.panierListe = {};
    }
    else {
      this.panierListe = this.panierService.getListePanier(this.tokenStorage.getUser().id).subscribe({
        next: (data) => {
          this.panierListe = data;
          this.calculTotal();
        },
        error: (e) => console.error(e)
      })
    }
  }
  effacerPanier(idPanier:string){
      let idUser = this.tokenStorage.getUser().id;
      this.panierListe = this.panierService.effacerPanier(idPanier,idUser).subscribe({
        next: (data) => {
          this.panierListe = data;
          this.calculTotal();
        },
        error: (e) => console.error(e)
      });
  }
  changeQuantite(idPanier:string,event:any){
    let idUser = this.tokenStorage.getUser().id;
    let qte = event.target.value;
    this.panierService.changeQuantite(idPanier,qte,idUser).subscribe({
      next: (data) => {
        this.panierListe = data;
        this.calculTotal();
      },
      error: (e) => console.error(e)
    });
  }
  calculTotal(){
    console.log(this.panierListe);
    this.total = 0;
    for(let j=0;j<this.panierListe.length;j++){
      let temp = this.panierListe[j].plat.prix * this.panierListe[j].quantite;

      this.total+= temp;
    }
  }
}
