import {Component, ElementRef, ViewChild} from "@angular/core";
import { AuthService } from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ger-authentication',
    templateUrl: './authentication.component.html',
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
