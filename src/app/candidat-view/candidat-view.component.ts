import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class CandidatViewComponent implements OnInit {
  titre:string="liste des candidats" ; 
  tabCandidats = [
    {nom:'Popey',image:'../assets/popey.jpg', nb:16, parti:true},
    {nom:'Sam',image:'../assets/popey.jpg', nb:14, parti:false },
    {nom:'Donald',image:'../assets/popey.jpg', nb:44, parti:false}
  ];
  onFollow(i:number) 
  { 
    this.tabCandidats[i].nb++ ; 
  }
      
    


  
    

    
  constructor() { }

  ngOnInit() {
  }

}
