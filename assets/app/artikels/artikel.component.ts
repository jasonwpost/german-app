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

   #wort {
   border-color:blue;
   }
  `]

})
export class ArtikelComponent {
  @Input() artikel : Artikel;
  @Output() parentChange = new EventEmitter();

  private answer : string;
  private solution : boolean;

  changeAnswer(value){
    this.answer = value;
    if (this.checkAnswer()){
      this.solution = true;

    } else {
      this.solution = false;
    }
    this.changeValueInParent();
  }

  checkAnswer(){
    return this.answer == this.artikel.artikel;
  }

  changeValueInParent() {
   this.parentChange.emit({
     wort : this.artikel.wort,
     result : this.solution
   });
  }

  getStyle(){
    if (this.solution == null){
      return 'light-gray';
    } else if (this.solution){
      return '#66ff66';
    } else {
      return 'red';
    }
  }

  getSymbol(){
    if (this.solution == null){
      return '';
    } else if (this.solution){
      return '✔';
    } else {
      return '✘';
    }
  }


  constructor() {

  }


}
