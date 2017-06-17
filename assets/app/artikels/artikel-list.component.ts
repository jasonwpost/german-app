import { Component } from '@angular/core';
import { Artikel } from './artikel.model';
import { ArtikelComponent } from './artikel.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ger-artikelList',
  template: `
  <div class="col-md-8 col-md-offset-2">
  <h2 style="text-align: center;">Artikel Quiz</h2>
  <br />
    <ger-artikel
      [artikel]="artikel"
      *ngFor="let artikel of artikels"
      (updateArtikel)="artikelValueChange($event);"
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
  marking : number [];
  score : number = 0;

  artikelValueChange({wort, result}) {
    let index = this.artikels.map(function(e) { return e.wort;}).indexOf(wort);
    if(result){
      this.marking[index] = 1;
    } else {
      this.marking[index] = 0;
    }
    if (this.authservice.isLoggedIn()){
        this.updateUserAssessment(wort, result);
    }
    this.recalculateScore();
  }

   recalculateScore(){
      this.score = this.marking.reduce((count, mark) => count + mark, 0);
   }

   updateUserAssessment(wort, result){
     console.log(this.authservice.getUserId());
   }

  constructor(private authservice: AuthService){
    this.artikels = this.shuffleAndReturnSubsetOfArray(this.artikels, 3);
    this.marking = this.artikels.map(artikel => 0);
  }

  shuffleAndReturnSubsetOfArray(array, numofSubset) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let subset = array.slice(0, numofSubset);
    return subset;
  }

}
