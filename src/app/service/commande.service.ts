import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }
  getListeCommande(idUser:string){
    return this.http.get<Number>(environment.apiUrl + "/api/commande/liste/"+idUser);
  }
}
