import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

import {Pharmacie} from '../models/Pharmacie';
import {PharmacieService} from '../ressources/pharmacie.service';

@Component({
  selector: 'app-fiche-pharmacie',
  templateUrl: './fiche-pharmacie.component.html',
  styleUrls: ['./fiche-pharmacie.component.css']
})
export class FichePharmacieComponent implements OnInit {
  pharmacie: Pharmacie ;
  newPharmacie: Pharmacie = new Pharmacie();

  constructor(private pharmacieService: PharmacieService) {
  }

  ngOnInit() {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    /*fetch('http://localhost:8080/api/pharmacie')
      .then(response => response.json())
      .then(data => console.log(JSON.stringify(data)));*/
    this.createPharmacie();

  }

  /*
  createPharmacie(): void {
      this.pharmacieService.createPharmacie()
        .subscribe(newPharmacie => {
          this.newPharmacie = newPharmacie;
        });

      console.log(this.pharmacie);
  }*/

  createPharmacie() {
    //
    const options = {
      method: 'POST',
      body: JSON.stringify(this.newPharmacie),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // fetch('http://localhost: 8080', options).then(res => res.json()).then(res => console.log(res));

    console.log(this.newPharmacie);

    return this.pharmacieService.createPharmacie(this.newPharmacie).subscribe( list =>
    this.pharmacie = list);
  }


/*
  updatePharmacies(PharmacieData: Pharmacie): void {
  }

  deletePharmacies(): void{
  }
*/







}
