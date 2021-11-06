import { Pipe, PipeTransform } from '@angular/core';
import PokedexVersionModel from '@app/domain/pokedex-version/pokedex-version.model';

@Pipe({
  name: 'pokemonSpritePosition',
})
export class PokemonSpritePositionPipe implements PipeTransform {
  /**
   * Calcular la posición del sprite del Pokémon, según su posición.
   * La posición del Pokémon se divide entre 10, porque son 10 los Pokémon que hay por fila en las imágenes de sprites.
   * La parte entera representa la posición Y y la parte decimal la posición X.
   * Las dimensiones de cada sprite es de 56x56.
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
