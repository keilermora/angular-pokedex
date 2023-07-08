import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { LanguageModel } from 'src/app/core/services/language/languages.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QueryParamsHandlingDirective } from '../../directives/query-params-handling/query-params-handling.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, NgClass, QueryParamsHandlingDirective, RouterLink, TranslateModule],
})
export class NavbarComponent implements OnInit {
  iconGithub = faGithub;
  iconLinkedin = faLinkedin;
  iconBars = faBars;
  iconTimes = faTimes;

  keilerLinkedin = environment.keilerLinkedin;
  pokedexGithub = environment.pokedexGithub;

  showSidebar = false;

  currentLanguage!: LanguageModel;

  private router = inject(Router);
  private languageService = inject(LanguageService);

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  goTo(route: string) {
    this.router.navigate([route]).then(() => {
      // Close sidebar on route change
      this.showSidebar = false;
    });
  }

  onToggleLanguage() {
    this.languageService.toggleLanguage();
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }
}
