import { Component, Input } from '@angular/core';
import { Artikel } from './artikel.model';

@Component({
  selector: 'ger-artikel',
  templateUrl: './artikel.component.html',
  styles: []

})
export class ArtikelComponent {
  @Input() artikel : Artikel;

  private answer : string;
  private solution : string;

  changeanswer(value){
    this.answer = value;
    if (this.checkAnswer()){
      this.solution = "correct";

    } else {
      this.solution = "incorrect";
    }
  }

  checkAnswer(){
    if (this.answer == this.artikel.artikel){
      return true;
    } else {
      return false;
    }
  }

  getStyle(){
    if (this.solution == null){
      return 'white';
    } else if (this.solution == "correct"){
      return 'green';
    } else {
      return 'red';
    }
  }

  constructor() {
    console.log(this.artikel);
  }


}
