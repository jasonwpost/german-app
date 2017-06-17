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
  @Output() updateArtikel = new EventEmitter();

  private solution : boolean;

  changeAnswer(value){
    this.solution = this.checkAnswer(value);
    this.changeAnswerInParentList();
  }

  checkAnswer(answer){
    return answer == this.artikel.artikel;
  }

  changeAnswerInParentList() {
   this.updateArtikel.emit({
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

}
