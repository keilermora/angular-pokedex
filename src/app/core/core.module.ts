import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { environment } from '@env';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './customs/custom-route-reuse-strategy';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache({
            addTypename: false,
          }),
          link: httpLink.create({
            uri: environment.pokeApiGraphQL,
          }),
        };
      },
      deps: [HttpLink],
    },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
