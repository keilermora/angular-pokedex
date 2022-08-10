import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  iconGithub = faGithub;
  iconLinkedin = faLinkedin;
  iconBars = faBars;
  iconTimes = faTimes;

  keilerLinkedin = environment.keilerLinkedin;
  pokedexGithub = environment.pokedexGithub;

  showSidenav = false;

  constructor(private router: Router) {}

  /**
   * Navigate to route. Then, close sidenav.
   * @param route Ruta a la cual dirigir.
   */
  goTo(route: string) {
    this.router.navigate([route]).then(() => {
      this.showSidenav = false;
    });
  }
}
