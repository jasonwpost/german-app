import {Component, DoCheck, ElementRef, OnChanges, ViewChild} from "@angular/core";
import { AuthService } from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ger-authentication',
    template: `
        <header class="container header">
            <nav class="col-md-8 col-md-offset-2" *ngIf="!isLoggedIn()">
                <ul class="nav nav-pills">
                    <li #signup id="signup" routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                    <li #signin id="signin" routerLinkActive="active"><a [routerLink]="['signin']">Signin</a></li>
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
        
        .nav-pills li {
            padding-right: 10px;
        }
    `]
})
export class AuthenticationComponent {
    @ViewChild('signup') signup: ElementRef;
    @ViewChild('signin') signin: ElementRef;
    private routerClicked = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        document.addEventListener('click', this.manageMenu.bind(this));
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

    manageMenu() {
        this.routerClicked =
            this.signup.nativeElement.classList.contains('active') ||
            this.signin.nativeElement.classList.contains('active');
    }
}
