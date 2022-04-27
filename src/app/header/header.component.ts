// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";
import {PanierService} from "../service/panier.service";

// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  isLoggedIn = false;
  user ;
  panier : any ;
  constructor( private tokenStorage: TokenStorageService,private panierService:PanierService) {
    this.user = tokenStorage.getUser();

    /*if(null === this.tokenStorage.getToken()) {
      this.panier = 0;
    }
    else{

      this.panier = panierService.getNombrePanier(this.user.id).subscribe({
        next: (data) => {

          this.panier = data;

          /!*this.panier = data;*!/
        },
        error: (e) => console.error(e)
      })
    }*/


  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.panier = this.panierService.getNombrePanier(this.user.id).subscribe({
      next: (data) => {


        this.initBadgePanier(data);
        /!*this.panier = data;*!/
      },
      error: (e) => console.error(e)
    });

    this.panierService.isPanierObserver().subscribe((panier:Number) => {
      this.initBadgePanier(panier)
    });
  }
  logout():void{
    this.tokenStorage.signOut();
    this.reloadPage();
  }
  reloadPage(): void {
    window.location.reload();
  }
  initBadgePanier(panier:Number){

    this.panier = panier;

  }
}
