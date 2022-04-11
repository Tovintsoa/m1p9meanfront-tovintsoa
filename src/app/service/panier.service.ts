import { Injectable } from '@angular/core';
import {Restaurant} from "../model/restaurant.model";
import {HttpClient} from "@angular/common/http";
import {Panier} from "../model/panier.model";
import {Observable} from "rxjs";
const baseUrl = 'https://m1p9mean-tovintsoa.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class PanierService {

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
}
