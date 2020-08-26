import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {ListeMedicamentComponent} from './liste-medicament/liste-medicament.component';
import {ListePharmacieComponent} from './liste-pharmacie/liste-pharmacie.component';
import {FichePharmacieComponent} from './fiche-pharmacie/fiche-pharmacie.component';
import {FicheMedicamentComponent} from './fiche-medicament/fiche-medicament.component';
import {OperationComponent} from './operation/operation.component';
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Operation',
    component: OperationComponent
  },
  {
    path: 'AjoutMedicament',
    component:  FicheMedicamentComponent
  },
  {
    path: 'AjoutPharmacie',
    component:  FichePharmacieComponent

  },
  {
    path: 'ListPharmacie',
    component:  ListePharmacieComponent
  },
  {
    path: 'ListMedicament',
    component:  ListeMedicamentComponent
  },
  {
    path: 'Localisation',
    component:  MapComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
