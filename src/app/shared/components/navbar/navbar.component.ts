import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { LanguageModel } from 'src/app/core/services/language/languages.model';

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

  showSidebar = false;

  currentLanguage: LanguageModel;

  constructor(private router: Router, private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  /**
   * Navigate to route. Then, close sidebar.
   * @param route Ruta a la cual dirigir.
   */
  goTo(route: string) {
    this.router.navigate([route]).then(() => {
      this.showSidebar = false;
    });
  }

  onToggleLanguage() {
    this.languageService.toggleLanguage();
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }
}
