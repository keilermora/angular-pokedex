import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonWeight',
})
export class PokemonWeightPipe implements PipeTransform {
  /**
   * Convert hectograms to kilograms.
   * @param hectograms Pokémon weight in hectograms.
   */
  transform(hectograms: number): string {
    return `${hectograms / 10}kg`;
  }
}
