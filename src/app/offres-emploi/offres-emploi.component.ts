import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listeEmploi!:Emploi[];
  nombreOffresNonCloturees!:number;
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference: "S0",titre:"Management",entreprise:"Actia",etat:true},
      {reference: "S1",titre:"Sécurité",entreprise:"Focus",etat:false},
      {reference: "S3",titre:"Dev",entreprise:"Vermeg",etat:true}]
  }

  Bilan() {
    this.nombreOffresNonCloturees = this.listeEmploi.filter(emploi => emploi.etat).length;
  }
 

}
