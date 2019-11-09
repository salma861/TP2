import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tabnb =new Array (14,17,5,20)  ; 
 titel:string  = "operation sur un tableeau"  ;  
minimum () {
  let min=this.tabnb[0] ; 
  for (let i=0; i<4 ; i++) {
    if (min > this.tabnb[i])

min=this.tabnb[i] ;  }
return min 
}
moyenne () {
let moy=0 ; 
for(let i=0;i<4;i++){ 
  moy=this.tabnb[i]+moy ; 
}
moy=moy/4 ; 
return moy ; 
}

  constructor() { }

  ngOnInit() {
  }

}
