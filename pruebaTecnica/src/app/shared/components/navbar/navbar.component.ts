import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  isLoggedIn = false;
  showMenu = false;
  mobileMenuOpen = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.showMenu = false;
    this.mobileMenuOpen = false;
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    if (this.isLoggedIn) {
      this.showMenu = !this.showMenu;
    } else {
      this.login();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
