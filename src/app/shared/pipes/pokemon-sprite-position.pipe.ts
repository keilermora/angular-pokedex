import { Pipe, PipeTransform } from '@angular/core';
import { PokedexVersion } from '@data/types/pokedex-version';

@Pipe({
  name: 'pokemonSpritePosition'
})
export class PokemonSpritePositionPipe implements PipeTransform {

  /**
   * Calcular la posición del sprite del Pokémon, según su posición.
   * La posición del Pokémon se divide entre 10, porque son 10 los Pokémon que hay por fila en las imágenes de sprites.
   * La parte entera representa la posición Y y la parte decimal la posición X.
   * Las dimensiones de cada sprite es de 56x56.
   */
  transform(pokemonNumber: number, pokedexVersion: PokedexVersion): any {
    const position = pokemonNumber - 1;
    const numberDiv = parseFloat((position / 10).toString()).toFixed(1);
    const posX = parseInt(numberDiv.substring(numberDiv.toString().length - 1), 10) * 56;
    const posY = Math.floor(parseFloat(numberDiv)) * 56;

    return {
      backgroundImage: `url(${pokedexVersion.spritesUrl})`,
      backgroundPosition: `-${posX}px -${posY}px`,
    };
  }
}
