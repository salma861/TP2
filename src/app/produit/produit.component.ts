import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  prduit=1 ; 
  nb1=15;
  nb2=15; 
  onProduit ( ) {
    this.prduit=this.nb1*this.nb2 ; 
  }


  constructor() { }

  ngOnInit() {
  }

}
