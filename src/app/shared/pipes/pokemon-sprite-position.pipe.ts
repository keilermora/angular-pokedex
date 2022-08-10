import { Pipe, PipeTransform } from '@angular/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';

@Pipe({
  name: 'pokemonSpritePosition',
})
export class PokemonSpritePositionPipe implements PipeTransform {
  /**
   * Calculate Pokémon sprite position by Pokémon number.
   * We divide by 10 because we have 10 Pokémon per file in spritesheet resources.
   * The integer part represents Y position.
   * The decimal part represents X position.
   * Sprites dimension are 56x56 pixels.
   */
  transform(pokemonNumber: number, pokedexVersion: PokedexVersionModel): any {
    const {
      sprites: { height, width, url },
    } = pokedexVersion;
    const position = pokemonNumber - 1;
    const numberDiv = parseFloat((position / 10).toString()).toFixed(1);
    const posX = parseInt(numberDiv.substring(numberDiv.toString().length - 1), 10) * width;
    const posY = Math.floor(parseFloat(numberDiv)) * height;

    return {
      backgroundImage: `url(${url})`,
      backgroundPosition: `-${posX}px -${posY}px`,
      height: `${height}px`,
      width: `${width}px`,
    };
  }
}
