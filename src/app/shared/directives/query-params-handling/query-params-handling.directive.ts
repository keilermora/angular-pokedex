import { Directive, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'a[routerLink]',
  standalone: true,
})
export class QueryParamsHandlingDirective implements OnInit {
  private routerLink = inject(RouterLink);

  ngOnInit() {
    this.routerLink.queryParamsHandling = 'merge';
  }
}
