import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from './app.routing';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { ArtikelComponent } from "./artikels/artikel.component";
import { ArtikelListComponent } from "./artikels/artikel-list.component";
import { AdjektivComponent } from "./adjektive/adjektiv.component";
import { AdjektivListComponent } from "./adjektive/adjektiv-list.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { AssessmentService } from "./assessment/assessment.service";

@NgModule({
    declarations: [
      AppComponent,
      ArtikelComponent,
      ArtikelListComponent,
      AdjektivComponent,
      AdjektivListComponent,
      HeaderComponent,
      AuthenticationComponent,
      LogoutComponent,
      SignupComponent,
      SigninComponent
    ],
    imports: [BrowserModule,
              routing,
              ReactiveFormsModule,
              HttpModule],
    bootstrap: [AppComponent],
    providers: [AuthService, AssessmentService]
})
export class AppModule {

}
