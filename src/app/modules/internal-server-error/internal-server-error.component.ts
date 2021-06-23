import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PokedexService } from '@data/services/pokedex.service';
import Pokedex from '@data/types/pokedex';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.scss'],
})
export class InternalServerErrorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  reload(): void {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
