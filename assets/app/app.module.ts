import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { ArtikelComponent } from "./artikels/artikel.component";

@NgModule({
    declarations: [
      AppComponent,
      ArtikelComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
