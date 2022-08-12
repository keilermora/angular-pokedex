import { Pipe, PipeTransform } from '@angular/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';

@Pipe({
  name: 'pokemonImageUrl',
})
export class PokemonImageUrlPipe implements PipeTransform {
  /**
   * Returns Pokémon image url.
   * The url is composed by the Pokédex version and Pokémon number.
   * @param position Pokémon number.
   * @param pokedexVersion Pokédex version selected by the user.
   */
  transform(position: number, pokedexVersion: PokedexVersionModel): string {
    return `${pokedexVersion.sprites.url}/${position}.gif`;
  }
}
