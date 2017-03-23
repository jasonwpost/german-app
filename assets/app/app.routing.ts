import { Routes, RouterModule } from "@angular/router";
import { ArtikelListComponent } from "./artikels/artikel-list.component";
import { AdjektivListComponent } from "./adjektive/adjektiv-list.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/artikels', pathMatch: 'full' },
  { path: 'artikels', component: ArtikelListComponent },
  { path: 'adjektive', component: AdjektivListComponent },
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
