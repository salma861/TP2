import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  nom:string="popey" ; 
  age=18 ; 
  image:string="../assets/popey.jpg";


  constructor() { }

  ngOnInit() {
  }

}
