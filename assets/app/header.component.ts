import { Component } from '@angular/core';

@Component({
  selector: 'ger-header',
  template: `
  <header class="row">
    <nav class="col-md-8 col-md-offset-2">
    <h1>Vokabular üben</h1>
    <hr>
      <ul class="nav nav-pills">
      <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
      <li routerLinkActive="active"><a [routerLink]="['/artikels']">Artikels</a></li>
      <li routerLinkActive="active"><a [routerLink]="['/adjektive']">Adjektives</a></li>
      </ul>
    </nav>
  </header>

  `
})
export class HeaderComponent {}
