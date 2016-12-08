import { Component } from '@angular/core';
import { Artikel } from './artikel.model';
import { ArtikelComponent } from './artikel.component';

@Component({
  selector: 'ger-artikelList',
  template: `
  <div class="col-md-8 col-md-offset-2">
  <h2>Artikel Quiz</h2>
    <ger-artikel
      [artikel]="artikel"
      *ngFor="let artikel of artikels"
      (parentChange)="myValueChange($event);"
      >
    </ger-artikel>

    <p>Score: {{ score }}  / {{ artikels.length }} </p>
  </div>
  `
})
export class ArtikelListComponent {

  artikels : Artikel[] = [
    new Artikel('Die', 'Biologie'),
    new Artikel('Das', 'Englisch'),
    new Artikel('Die', 'Kunst'),
    new Artikel('Der', 'Sport')
  ];
  marking : number[];
  score : number = 0;

  myValueChange(event) {
   for (var i = 0; i < this.artikels.length; i++){
     if (this.artikels[i].wort == event.wort){
       if(event.result == "correct"){
         this.marking[i] = 1;
       } else {
         this.marking[i] = 0;
       }
       break;
     }
   }
   this.recalculateScore();
 }

 recalculateScore(){
   this.score = this.marking.reduce(function(a, b) {
  return a + b;
}, 0);
 }

 constructor(){
   this.marking = Array.apply(null, Array(this.artikels.length)).map(Number.prototype.valueOf,0);
 }

}
