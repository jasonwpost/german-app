import { Routes, RouterModule } from "@angular/router";
import { ArtikelListComponent } from "./artikels/artikel-list.component";
import { AdjektivListComponent } from "./adjektive/adjektiv-list.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/artikels', pathMatch: 'full' },
  { path: 'artikels', component: ArtikelListComponent },
  { path: 'adjektive', component: AdjektivListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
