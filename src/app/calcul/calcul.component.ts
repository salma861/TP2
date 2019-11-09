import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  titre:string="operation de calcul" ;
  carre=1 ; 
  somme = 0;  
  onKeyUp (event:KeyboardEvent  ) { 
    var nb1:any =(<HTMLInputElement>event.target).value ; 
    this.carre=nb1*nb1 ;  
  }
onSomme (nb1:string,nb2:string ) {
  this.somme=parseFloat(nb1)+parseFloat(nb2) ; 

}

  constructor() { }

  ngOnInit() {
  }

}
