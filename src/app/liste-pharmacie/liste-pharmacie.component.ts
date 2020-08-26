import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

import {PharmacieService} from '../ressources/pharmacie.service';
import {Pharmacie} from '../models/Pharmacie';


@Component({
  selector: 'app-liste-pharmacie',
  templateUrl: './liste-pharmacie.component.html',
  styleUrls: ['./liste-pharmacie.component.css']
})
export class ListePharmacieComponent implements OnInit {

  pharmacie: Pharmacie[] ;
  constructor(private pharmacieService: PharmacieService) { }

  ngOnInit() {
    this.getListPharmacie();
  }

  getListPharmacie() {

    this.pharmacieService.getListPharmacie()
      .subscribe(pharmacie => {
        this.pharmacie = pharmacie;
        console.log(this.pharmacie);
      }
  );
  }



}
