import { Component } from '@angular/core';
import { Artikel } from './artikel.model';
import { ArtikelComponent } from './artikel.component';

@Component({
  selector: 'ger-artikelList',
  template: `
  <div class="col-md-6 col-md-offset-3">
  <h2 style="text-align: center;">Artikel Quiz</h2>
  <br />
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
  marking : {};
  score : number = 0;

  myValueChange(event) {
  if(event.result == "correct"){
    this.marking[event.wort] = 1;
  } else {
    this.marking[event.wort] = 0;
  }

   this.recalculateScore();
 }

 recalculateScore(){
   var newScore = 0;
   for (var key in this.marking){
     newScore += this.marking[key]
   }
   this.score = newScore;
 }

shuffleAndReturnSubsetOfArray(array, numofSubset) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  var subset = array.slice(0, numofSubset);
  return subset;
}

 constructor(){
   this.artikels = this.shuffleAndReturnSubsetOfArray(this.artikels, 3);
   //for (var wort in this.artikels){
     //this.marking[wort] = 0;
   //}
 }

}
