import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
})
export class PokemonNamePipe implements PipeTransform {
  /**
   * Some Pokémon names must be formatted.
   * @example
   * // returns nidoran♀
   * transform('nidoran-f');
   * @param name Pokémon name,
   */
  transform(name: string): string {
    if (name) {
      return name
        .replace(/-f$/g, '♀')
        .replace(/-m$/g, '♂')
        .replace(/-normal/g, '')
        .replace(/^mr-/g, 'Mr. ');
    }

    return name;
  }
}
