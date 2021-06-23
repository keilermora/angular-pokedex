import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PokedexService } from '@data/services/pokedex.service';
import Pokedex from '@data/types/pokedex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokedex: Pokedex = {} as Pokedex;

  constructor(private pokedexService: PokedexService, private router: Router) {}

  ngOnInit() {
    // Si existe una ruta en el localStorage, navegar a ella.
    // Esto ocurre cuando el servidor muestra la pagina 404 sin saber que se
    // trata de una single page application.
    const route = localStorage.getItem('angular-route');
    if (route) {
      localStorage.removeItem('angular-route');
      this.router.navigate([route]);
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      // Scrollear al top sólo si el cambio de ruta no incluye query params.
      if (!/\?/.test(evt.url)) {
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }
    });

    this.pokedexService.getPokedex().subscribe(
      (pokedex: Pokedex) => {
        this.pokedex = pokedex;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
