import { Component, Input, OnChanges } from '@angular/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonTypeModel from 'src/app/core/services/pokemon-type/pokemon-type.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnChanges {
  // Pokémon data
  id = 0;
  name = '';
  private types: PokemonTypeModel[] = [];

  // Sprites
  animated = false;
  width = 0;
  height = 0;

  _pokedexVersion = {} as PokedexVersionModel;

  // Card styles
  background = {};

  @Input() set pokemon(pokemon: PokemonModel) {
    const { id, name, types } = pokemon;
    this.id = id;
    this.name = name;
    this.types = types;
  }

  @Input() set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    const { sprites } = pokedexVersion;
    const { animated, height, width } = sprites;
    this._pokedexVersion = pokedexVersion;
    this.animated = animated;
    this.height = height;
    this.width = width;
  }

  constructor() {}

  ngOnChanges(): void {
    this.setStyles();
  }

  private setStyles() {
    const primaryColor = this.types[0].color?.light;
    const secondaryColor = this.types[1]?.color?.light || '#ffffff';

    this.background = {
      background: `linear-gradient(45deg, ${secondaryColor}, ${primaryColor}, ${secondaryColor})`,
    };
  }
}
