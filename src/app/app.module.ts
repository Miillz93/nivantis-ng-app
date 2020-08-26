import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FichePharmacieComponent } from './fiche-pharmacie/fiche-pharmacie.component';
import { FicheMedicamentComponent } from './fiche-medicament/fiche-medicament.component';
import { ListeMedicamentComponent } from './liste-medicament/liste-medicament.component';
import { ListePharmacieComponent } from './liste-pharmacie/liste-pharmacie.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

import {PharmacieService} from './ressources/pharmacie.service';
import { OperationComponent } from './operation/operation.component';
import { MapComponent } from './map/map.component';
import {MedicamentService} from './ressources/medicament.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FichePharmacieComponent,
    FicheMedicamentComponent,
    ListeMedicamentComponent,
    ListePharmacieComponent,
    AboutComponent,
    FooterComponent,
    OperationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, AgmCoreModule.forRoot({apiKey: ''})
  ],
  providers: [PharmacieService,
              MedicamentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
