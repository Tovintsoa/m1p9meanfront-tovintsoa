import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";
import {CommandeService} from "../service/commande.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandeListe!: any;
  user! : any ;
  total = 0 ;
  constructor(private tokenStorage: TokenStorageService,private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.commandeListe = this.commandeService.getListeCommande(this.user.id).subscribe({
      next: (data) => {
        this.commandeListe = data;
        this.calculTotal();
      },
      error: (e) => console.error(e)
    });
  }
  calculTotal(){
    console.log(this.commandeListe);
    this.total = 0;
    for(let j=0;j<this.commandeListe.length;j++){
      let temp = this.commandeListe[j].plat.prix * this.commandeListe[j].quantite;

      this.total+= temp;
    }
  }

}
