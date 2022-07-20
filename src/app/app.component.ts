import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import Pokedex from 'src/app/core/services/filter/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokedex: Pokedex = {} as Pokedex;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // Si existe una ruta en el localStorage, navegar a ella.
    // Esto ocurre cuando el servidor muestra la pagina 404 sin saber que se
    // trata de una single page application.
    const route = localStorage.getItem('angular-route');
    if (route) {
      localStorage.removeItem('angular-route');
      this.router.navigate([route]);
    }

    this.router.events
      .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        if (e.position) {
          // backward navigation
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          // anchor navigation
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (!/\?/.test(e.routerEvent.url)) {
          // forward navigation
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
