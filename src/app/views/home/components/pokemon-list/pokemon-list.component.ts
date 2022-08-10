import { Component, Input } from '@angular/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  _busy: boolean = true;
  _pokedexVersion: PokedexVersionModel = {} as PokedexVersionModel;
  _pokemons: PokemonModel[] = [];

  @Input() set busy(busy: boolean) {
    this._busy = busy;
  }

  @Input() set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    this._pokedexVersion = pokedexVersion;
  }

  @Input() set pokemons(pokemons: PokemonModel[]) {
    this._pokemons = pokemons;
  }

  constructor() {}
}
