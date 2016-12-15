import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { ArtikelComponent } from "./artikels/artikel.component";
import { ArtikelListComponent } from "./artikels/artikel-list.component";
import { AdjektivComponent } from "./adjektive/adjektiv.component";
import { AdjektivListComponent } from "./adjektive/adjektiv-list.component";

@NgModule({
    declarations: [
      AppComponent,
      ArtikelComponent,
      ArtikelListComponent,
      HeaderComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    providers: [ArtikelComponent]
})
export class AppModule {

}
