import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { LanguageModel, LanguagesModel } from './languages.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages: LanguagesModel = {
    es: {
      id: 7,
      name: 'es',
    },
    en: {
      id: 9,
      name: 'en',
    },
  };

  private currentLanguage: LanguageModel;

  private translateService = inject(TranslateService);

  constructor() {
    const defaultLanguage = localStorage.getItem(environment.defaultLanguageKey);
    this.currentLanguage = defaultLanguage ? this.languages[defaultLanguage] : this.languages['en'];
    this.translateService.use(this.currentLanguage.name);
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  toggleLanguage() {
    this.currentLanguage =
      this.currentLanguage.id === this.languages['en'].id
        ? this.languages['es']
        : this.languages['en'];
    this.translateService.use(this.currentLanguage.name);
    localStorage.setItem(environment.defaultLanguageKey, this.currentLanguage.name);
  }
}
