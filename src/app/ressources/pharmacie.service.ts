import { Injectable } from '@angular/core';
import {Pharmacie} from '../models/Pharmacie';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  private baseUrl = 'http://localhost:8080';
  private handleError;

  constructor(private http: HttpClient) { }

  /*
  getPharmacie(): Promise<Pharmacie[]> {
    return this.http.get(this.baseUrl + '/api/pharmacie/').toPromise()
      .then(response => response as Pharmacie[])
      .catch(this.handleError);
  }*/

  getListPharmacie(): Observable<Pharmacie[]> {
    return  this.http.get<(Pharmacie[])>( this.baseUrl + '/api/pharmacie/');
  }

  // createPharmacie(PharmacieData: Pharmacie): Promise<Pharmacie> {
  createPharmacie(PharmacieData: Pharmacie): Observable<Pharmacie> {
    return this.http.post<(Pharmacie)>( this.baseUrl + '/api/pharmacie/', PharmacieData );
  }

}
