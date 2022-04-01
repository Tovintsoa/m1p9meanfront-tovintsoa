import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Restaurant} from "../model/restaurant.model";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: Restaurant = {
    nom: '',
    prenom:'',
    email: '',
    role:'',
    description: '',
    url_image:'',
  };
  submitted = false;
  constructor(private  userService:UserService) { }

  ngOnInit(): void {
  }
  saveUser():void{
    const data = {
      nom:this.user.nom,
      prenom:this.user.prenom,
      email:this.user.email,
      role:this.user.role,
      description:this.user.description,
      url_image:this.user.url_image,
      motdepasse: this.user.motdepasse
    };
    this.userService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
}
