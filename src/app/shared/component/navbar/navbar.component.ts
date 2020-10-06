import { Component, OnInit } from '@angular/core';
import { environment } from '@env';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  iconGithub: IconDefinition = faGithub;
  iconLinkedin: IconDefinition = faLinkedin;
  iconBars: IconDefinition = faBars;

  keilerLinkedin: string = environment.keilerLinkedin;
  pokedexGithub: string = environment.pokedexGithub;

  showSidenav: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Navegar a la ruta. Luego, cerrar el sidenav.
   * @param route Ruta a la cual dirigir.
   */
  goTo(route: string) {
    this.router.navigate([route]).then(()=>{
      this.showSidenav = false;
    });
  }
}
