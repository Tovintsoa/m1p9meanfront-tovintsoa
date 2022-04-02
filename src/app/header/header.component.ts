import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";
import {Restaurant} from "../model/restaurant.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user ;
  constructor( private tokenStorage: TokenStorageService) {
    this.user = tokenStorage.getUser();
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
