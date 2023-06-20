import { Directive } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'a[routerLink]',
  standalone: true,
})
export class QueryParamsHandlingDirective {
  constructor(routerLink: RouterLink) {
    routerLink.queryParamsHandling = 'merge';
  }
}
