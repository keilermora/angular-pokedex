import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexVersionPlatform } from '@data/types/pokedex';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.scss'],
})
export class InternalServerErrorComponent implements OnInit {
  pokedexVersionPlatform: PokedexVersionPlatform = {} as PokedexVersionPlatform;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  reload(): void {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
