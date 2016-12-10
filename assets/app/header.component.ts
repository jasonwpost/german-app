import { Component } from '@angular/core';

@Component({
  selector: 'ger-header',
  template: `
  <header class="row">
    <nav class="col-md-8 col-md-offset-2">
    <h1>Deutsch lernen</h1>
    <hr>
      <ul class="nav nav-pills">
        <li><a href="#">Artikels</a></li>
        <li><a href="#">Adjektives</a></li>
        <li><a href="#">Personalpronomen</a></li>
      </ul>
    </nav>
  </header>

  `
})
export class HeaderComponent {}
