import { Component, Input, OnInit } from '@angular/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonTypeModel from 'src/app/core/services/pokemon-type/pokemon-type.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  _pokemon = {} as PokemonModel;
  _pokedexVersion = {} as PokedexVersionModel;

  backgroundStyles = {};

  @Input() set pokemon(pokemon: PokemonModel) {
    this._pokemon = pokemon;
  }

  @Input() set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    this._pokedexVersion = pokedexVersion;
  }

  constructor() {}

  ngOnInit(): void {
    this.backgroundStyles = this.getBackgroundSyles(this._pokemon.types);
  }

  private getBackgroundSyles(pokemonTypes: PokemonTypeModel[]) {
    const primaryColor = pokemonTypes[0].color?.light;
    const secondaryColor = pokemonTypes[1]?.color?.light || '#ffffff';

    return {
      background: `radial-gradient(circle, ${secondaryColor} 0%, ${primaryColor} 75%)`,
    };
  }
}
