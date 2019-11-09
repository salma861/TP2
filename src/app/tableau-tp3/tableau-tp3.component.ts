import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau-tp3',
  templateUrl: './tableau-tp3.component.html',
  styleUrls: ['./tableau-tp3.component.css']
})
export class TableauTp3Component implements OnInit {
  titre:string="operation sur tableau" ; 
  tab= [15, 23, 46.2, 0, 89, 17, 80] ; 
  onPosition (indice:number) { 
console.log(indice) ; 
  }
  titre2="affichage des bouttons des elements paires" ; 

  constructor() { }

  ngOnInit() {
  }

}
