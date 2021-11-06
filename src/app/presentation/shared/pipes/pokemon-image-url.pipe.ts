import { Pipe, PipeTransform } from '@angular/core';
import PokedexVersionModel from '@app/domain/pokedex-version/pokedex-version.model';

@Pipe({
  name: 'pokemonImageUrl',
})
export class PokemonImageUrlPipe implements PipeTransform {
  /**
   * Devuelve a la ruta completa de la imagen del Pokémon.
   * La ruta es conformada por la versión de la Pokédex y el número del Pokémon.
   * @param position Número del pokémon.
   * @param pokedexVersion Versión seleccionada de la Pokédex.
   */
  transform(position: number, pokedexVersion: PokedexVersionModel): string {
    return `${pokedexVersion.sprites.url}/${position}.gif`;
  }
}
