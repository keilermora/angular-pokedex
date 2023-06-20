import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(CoreModule), provideRouter(routes)],
};
