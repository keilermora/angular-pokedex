import { Component, Input, OnInit } from '@angular/core';
import FilterModel from '@app/domain/filter/filter.model';
import Pokedex from '@app/domain/filter/filter.model';
import { GetFilterUseCase } from '@app/domain/filter/use-cases/get-filter.use-case';
import PokedexVersionModel from '@app/domain/pokedex-version/pokedex-version.model';
import Pokemon from '@app/domain/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  _busy: boolean = true;
  _pokedexVersion: PokedexVersionModel = {} as PokedexVersionModel;
  _pokemons: Pokemon[] = [];

  @Input() set busy(busy: boolean) {
    this._busy = busy;
  }

  @Input() set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    this._pokedexVersion = pokedexVersion;
  }

  @Input() set pokemons(pokemons: Pokemon[]) {
    this._pokemons = pokemons;
  }

  constructor() {}

  ngOnInit() {}
}
