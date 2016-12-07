import { Component, Input } from '@angular/core';
import { Artikel } from './artikel.model';

@Component({
  selector: 'ger-artikel',
  templateUrl: './artikel.component.html',
  styles: []

})
export class ArtikelComponent {
  public artikels : Artikel[] = [
    new Artikel('Die', 'Biologie'),
    new Artikel('Das', 'Englisch'),
    new Artikel('Die', 'Kunst'),
    new Artikel('Der', 'Sport')
  ];

  private opts = [
    "Der",
    "Die",
    "Das"
  ];
  private answer : string;
  private solution : string;

  changeanswer(value){
    this.answer = value;
    this.checkAnswer();
  }

  checkAnswer(){
    if (this.answer == this.artikels[0].artikel){
      this.solution = "correct";
    } else {
      this.solution = "incorrect";
    }
  }

  constructor() {}


}
