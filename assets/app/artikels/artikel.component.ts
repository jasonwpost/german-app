import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Artikel } from './artikel.model';

@Component({
  selector: 'ger-artikel',
  templateUrl: './artikel.component.html',
  styles: [`
   input {
      margin: 20px;
   }
   #result {
     //display: inline-block;
     width: fit-content;
     margin: 0 auto;
     padding: 5px;
     text-align: center;

     border-radius: 25px;
   }
  `]

})
export class ArtikelComponent {
  @Input() artikel : Artikel;
  @Output() parentChange = new EventEmitter();

  private answer : string;
  private solution : string;

  changeanswer(value){
    this.answer = value;
    if (this.checkAnswer()){
      this.solution = "correct";

    } else {
      this.solution = "incorrect";
    }
    this.changeValueInParent();
  }

  checkAnswer(){
    if (this.answer == this.artikel.artikel){
      return true;
    } else {
      return false;
    }
  }

  changeValueInParent() {
    //console.log(wort + " " + result);
   this.parentChange.emit({
     wort : this.artikel.wort,
     result : this.solution
   });
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

  }


}
