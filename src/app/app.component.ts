import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeSelected: string;
  showHideBackend !: boolean;
  constructor(private spinnerService: NgxSpinnerService,private location: Location) {
    this.typeSelected = 'ball-fussion';
    this.showHideBackend = false;
    if(location.path().includes('admin')){
      this.showHideBackend = true;
    }
  }


}
