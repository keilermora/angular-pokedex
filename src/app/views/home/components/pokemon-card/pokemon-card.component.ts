import { Component, Input } from '@angular/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  _pokemon = {} as PokemonModel;
  _pokedexVersion = {} as PokedexVersionModel;

  @Input() set pokemon(pokemon: PokemonModel) {
    this._pokemon = pokemon;
  }

  @Input() set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    this._pokedexVersion = pokedexVersion;
  }

  constructor() {}
}
