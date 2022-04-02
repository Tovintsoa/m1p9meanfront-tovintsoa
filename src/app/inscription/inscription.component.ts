import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Restaurant} from "../model/restaurant.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "../_helpers/Validation";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    motdepasse: new FormControl(''),
    motdepasse2: new FormControl(''),
    role:new FormControl(''),
  });
  user: Restaurant = {
    nom: '',
    prenom:'',
    email: '',
    role:'',
    description: '',
    url_image:'',
  };
  submitted = false;
  constructor(private  userService:UserService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        motdepasse: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        motdepasse2: ['', Validators.required],
        role:['',Validators.required]
      },
      {
        validators: [Validation.match('motdepasse', 'motdepasse2')]
      },

    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  saveUser():void{
    this.submitted = true;
    const data = {
      nom:this.user.nom,
      prenom:this.user.prenom,
      email:this.user.email,
      role:this.user.role,
      description:this.user.description,
      url_image:this.user.url_image,
      motdepasse: this.user.motdepasse,
    };
    this.userService.create(data).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      });
  }
  onReset(): void {
    this.submitted = false;

  }
}
