import { Component } from '@angular/core';

@Component({
  selector: 'ger-header',
  template: `
  <header class="container header">
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

  `,
  styles: [`
      .header {
          padding-bottom: 10px;
      }
      .nav-pills li {
          padding-right: 10px;
      }
  `]
})
export class HeaderComponent {}
