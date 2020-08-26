import { Component, OnInit } from '@angular/core';

import {Operation} from '../models/Operation';

import {NgForm} from '@angular/forms';
import {Pharmacie} from "../models/Pharmacie";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  operation: Operation = new Operation();
  txrem: number;
  // pvNet: number = this.operation.pAchat * 1.021;
  pvNet: number;
  paNet: number;
  coMulti: number;

  constructor() { }

  ngOnInit() {
  }

calculTxRemise() {
    this.pvNet = this.operation.pAchat;
    // this.operation.sum = this.pvNet - 1 / (this.operation.pAchat * 100);
    // this.operation.txRemise.map(data => console.log(data));
    // console.log();
    this.operation.sum = this.operation.pAchat * ( this.operation.txRemise / 100);

}

calculAchatNet() {
  this.paNet = this.operation.pAchat - this.operation.sum;

}
calculVenteNet() {
  this.operation.pVente = this.operation.pAchat * this.operation.coefMulti;
}

calculCMulti() {
this.operation.coefMulti = 1 - this.operation.txRemise / 100;
    // console.log(this.operation.sum);
}


}
