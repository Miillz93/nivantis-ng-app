import { Component, OnInit } from '@angular/core';
import {Medicament} from '../models/Medicament';
import {MedicamentService} from '../ressources/medicament.service';

@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit {

  medicament: Medicament[] ;
  constructor(private medicamentService: MedicamentService) { }

  ngOnInit() {
    this.getMedicament();
  }

  getMedicament() {
    this.medicamentService.getMedicament()
      .subscribe(medicament => {
        this.medicament = medicament;
        console.log(this.medicament);
    });
  }

}
