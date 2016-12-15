import { Component } from '@angular/core';
import { Adjektiv } from './adjektiv.model';
import { AdjektivComponent } from './adjektiv.component';

@Component({
  selector: 'ger-akjetivList',
  template: `

  `,
  styles: []
})
export class AdjektivListComponent {
  akjective : Adjektiv[] = [
    new Adjektiv('grün'),
    new Adjektiv('alt'),
    new Adjektiv('blau'),
    new Adjektiv('kaputt')
  ];
}
