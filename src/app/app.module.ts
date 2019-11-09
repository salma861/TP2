import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' ; 

import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
import{ProduitComponent}  from './produit/produit.component';
import { TableauTp3Component } from './tableau-tp3/tableau-tp3.component';


@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    PersonneComponent,
    CalculComponent,
    CandidatViewComponent,
    ProduitComponent,
    TableauTp3Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
