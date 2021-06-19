import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '@data/services/pokemon.service';
import { Pokedex } from '@data/types/pokedex';
import { PokedexService } from '@data/services/pokedex.service';
import { Pokemon } from '@data/types/pokemon';
import { first, share, switchMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  _busy: boolean = true;
  _pokemons: Pokemon[] = [];
  _pokedex: Pokedex = {} as Pokedex;

  @Input() set pokedex(pokedex: Pokedex) {
    this._pokedex = pokedex;
  }

  @Input() set pokemons(pokemons: Pokemon[]) {
    this._pokemons = pokemons;
  }

  @Input() set busy(busy: boolean) {
    this._busy = busy;
  }

  constructor() {}

  ngOnInit() {}
}
