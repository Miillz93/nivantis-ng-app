import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicament} from '../models/Medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private baseUrl = 'http://localhost:8080/rest/products';

  constructor(private http: HttpClient) { }

  getMedicament(): Observable<Medicament[]> {
    return this.http.get<(Medicament[])>(this.baseUrl + '/medicament');
  }

}
