import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {RestaurantDetailComponent} from "../restaurant-detail/restaurant-detail.component";
import {LoginComponent} from "../login/login.component";
import {InscriptionComponent} from "../inscription/inscription.component";
import {PanierComponent} from "../panier/panier.component";
import {CommandeComponent} from "../commande/commande.component";
import { ConnexionComponent } from './connexion/connexion.component';

import { HeaderBackComponent } from './header-back/header-back.component';
import {AppComponent} from "../app.component";

const routes: Routes = [
  { path: 'admin/connexion', component:ConnexionComponent},
];

@NgModule({
  declarations: [
    ConnexionComponent,
    HeaderBackComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    HeaderBackComponent
  ]
})
export class BackofficeModule { }
