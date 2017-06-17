import { Component } from '@angular/core';
import { Adjektiv } from './adjektiv.model';
import { AdjektivComponent } from './adjektiv.component';
import { Artikel } from '../artikels/artikel.model';

@Component({
  selector: 'ger-akjetivList',
  template: `
  <h1>Placeholder</h1>
  `,
  styles: []
})
export class AdjektivListComponent {

  pairs = [];

  akjective : Adjektiv[] = [
    new Adjektiv('grün'),
    new Adjektiv('alt'),
    new Adjektiv('blau'),
    new Adjektiv('kaputt')
  ];
  // replace this with subscription to service
  artikels : Artikel[] = [
    new Artikel('Die', 'Biologie'),
    new Artikel('Das', 'Englisch'),
    new Artikel('Die', 'Kunst'),
    new Artikel('Der', 'Sport')
  ]

  setUpPairs(){
    for (var i = 0; i < this.artikels.length; i++){
      var istStark;
      var artikel;
      
      this.pairs.push()
    }
  }
}
