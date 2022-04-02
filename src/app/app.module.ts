import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders  } from './_helpers/auth.interceptor';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component:DashboardComponent},
  { path: 'restaurant/:id', component: RestaurantDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantDetailComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
