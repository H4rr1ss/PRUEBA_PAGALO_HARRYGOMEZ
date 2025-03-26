import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  isLoggedIn = true;// Simulación de estado logueado
  showMenu = false;
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/auth']);
    console.log("Redirigiendo a login...");
  }

  logout() {
    this.isLoggedIn = false;
    this.showMenu = false;
    this.mobileMenuOpen = false;
    console.log("Sesión cerrada.");
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
