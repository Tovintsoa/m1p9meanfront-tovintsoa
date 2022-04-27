import { Injectable } from '@angular/core';
import {Restaurant} from "../model/restaurant.model";
import {HttpClient} from "@angular/common/http";
import {Panier} from "../model/panier.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {TokenStorageService} from "./token-storage.service";
const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panierObserver = new Subject<Number>();
  private panier!: any;
  constructor(private http: HttpClient) { }

  getNombrePanier(idUser:string){
    return this.http.get<Number>(baseUrl + "/api/panier/nombre/"+idUser);
  }
  getListePanier(idUser:string){
      return this.http.get<Panier>(baseUrl + '/api/panier/' + idUser);
  }
  ajouterPanier(data: any): Observable<any>{
    return this.http.post(baseUrl+"/api/ajouterPanier", data)
  }
  effacerPanier(idPanier:string,idUser: string){
    return this.http.get(baseUrl+"/api/deletePanier/"+idPanier+'/'+idUser);
  }
  changeQuantite(idPanier:string,qte:number,idUser: string){
    return this.http.get(baseUrl+"/api/panier/changeQuantite/"+idPanier+"/"+qte+"/"+idUser);
  }
  validerPanier(panier:any){
    return this.http.post(baseUrl+'/api/validerPanier',panier);
  }
  isPanierObserver():Observable<Number>{
    return this.panierObserver.asObservable();
  }
  setPanier(tokenStorage : TokenStorageService){
    let user = tokenStorage.getUser().id;
    var panier;
    this.getNombrePanier(user).subscribe({
      next: (data) => {
        panier = data;
        this.panierObserver.next(panier);
      },
      error: (e) => console.error(e)
    });


  }
}
