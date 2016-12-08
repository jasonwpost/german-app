import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { ArtikelComponent } from "./artikels/artikel.component";
import { ArtikelListComponent } from "./artikels/artikel-list.component";

@NgModule({
    declarations: [
      AppComponent,
      ArtikelComponent,
      ArtikelListComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    providers: [ArtikelComponent]
})
export class AppModule {

}
