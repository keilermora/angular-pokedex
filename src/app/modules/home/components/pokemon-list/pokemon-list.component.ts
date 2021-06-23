import { Component, Input, OnInit } from '@angular/core';
import Pokedex from '@data/types/pokedex';
import Pokemon from '@data/types/pokemon';

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
