import { Component, Input, OnChanges } from '@angular/core';
import { NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonTypeModel from 'src/app/core/services/pokemon-type/pokemon-type.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import { PokemonImageUrlPipe } from 'src/app/shared/pipes/pokemon-image-url/pokemon-image-url.pipe';
import { PokemonNamePipe } from 'src/app/shared/pipes/pokemon-name/pokemon-name.pipe';
import { PokemonNumberPipe } from 'src/app/shared/pipes/pokemon-number/pokemon-number.pipe';
import { PokemonSpritePositionPipe } from 'src/app/shared/pipes/pokemon-sprite-position/pokemon-sprite-position.pipe';
import { LazyImgDirective } from 'src/app/shared/directives/lazy-img/lazy-img.directive';
import { QueryParamsHandlingDirective } from 'src/app/shared/directives/query-params-handling/query-params-handling.directive';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  standalone: true,
  imports: [
    DialogBoxComponent,
    LazyImgDirective,
    NgIf,
    NgOptimizedImage,
    NgStyle,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
    QueryParamsHandlingDirective,
    RouterLink,
  ],
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
  backgroundStyles = {};

  @Input({ required: true }) set pokemon(pokemon: PokemonModel) {
    const { id, name, types } = pokemon;
    this.id = id;
    this.name = name;
    this.types = types;
  }

  @Input({ required: true }) set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    const { sprites } = pokedexVersion;
    const { animated, height, width } = sprites;
    this._pokedexVersion = pokedexVersion;
    this.animated = animated;
    this.height = height;
    this.width = width;
  }

  ngOnChanges() {
    this.setStyles();
  }

  private setStyles() {
    const primaryColor = this.types[0].color?.light;
    const secondaryColor = this.types[1]?.color?.light || '#ffffff';
    const opacity = 80;

    this.backgroundStyles = {
      background: `linear-gradient(45deg, ${secondaryColor}${opacity}, ${primaryColor}${opacity}, ${secondaryColor}${opacity})`,
    };
  }
}
