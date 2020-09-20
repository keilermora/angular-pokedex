import { Pipe, PipeTransform } from '@angular/core';
import { PokedexVersion } from '@data/types/pokedex-version';

@Pipe({
  name: 'pokemonImageUrl'
})
export class PokemonImageUrlPipe implements PipeTransform {

  /**
   * Devuelve a la ruta completa de la imagen del Pokémon.
   * La ruta es conformada por la versión de la Pokédex y el número del Pokémon.
   * @param position Número del pokémon.
   * @param pokedexVersion Versión seleccionada de la Pokédex.
   */
  transform(position: number, pokedexVersion: PokedexVersion): string {
    return `${pokedexVersion.spritesUrl}/${position + 1}.gif`;
  }
}
