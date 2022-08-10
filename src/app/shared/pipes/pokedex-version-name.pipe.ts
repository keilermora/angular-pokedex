import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedexVersionName',
})
export class PokedexVersionNamePipe implements PipeTransform {
  /**
   * Some Pokédex version names must be formatted.
   * @example
   * // returns let's go eevee
   * transform('lets-go-eevee');
   *
   * @param name Pokédex version name.
   */
  transform(name: string): string {
    return name.replace(/-/g, ' ').replace(/lets/g, "let's");
  }
}
