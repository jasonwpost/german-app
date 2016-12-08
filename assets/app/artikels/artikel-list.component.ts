import { Component } from '@angular/core';
import { Artikel } from './artikel.model';

@Component({
  selector: 'ger-artikelList',
  template: `
  <div class="col-md-8 col-md-offset-2">
  <h2>Artikel Quiz</h2>
    <ger-artikel
      [artikel]="artikel"

      *ngFor="let artikel of artikels">
    </ger-artikel>
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

}
