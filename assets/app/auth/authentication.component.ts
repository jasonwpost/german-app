import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ger-authentication',
    template: `
        <header class="container header">
            <nav class="col-md-8 col-md-offset-2" *ngIf="!isLoggedIn()">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['signup']" (click)="routerClicked=true">Signup</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['signin']" (click)="routerClicked=true">Signin</a></li>
                </ul>
            </nav>
            <div *ngIf="isLoggedIn()">
                <div class="col-md-8 col-md-offset-2">
                    <button class="btn btn-danger" (click)="onLogout()">Logout</button>
                </div>
            </div>
        </header>
        <div class="row" *ngIf="routerClicked">
           <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .header {
            padding-bottom: 10px;
        }
    `]
})
export class AuthenticationComponent {
    private routerClicked = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}
