import { Directive } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Directive({
  selector: 'a[routerLink]',
})
export class QueryParamsHandlingDirective {
  constructor(routerLink: RouterLinkWithHref) {
    routerLink.queryParamsHandling = 'merge';
  }
}
