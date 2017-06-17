import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import {AuthenticationComponent} from "./authentication.component";

export const AUTH_ROUTES: Routes = [
    { path: '', component: AuthenticationComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
    ];
