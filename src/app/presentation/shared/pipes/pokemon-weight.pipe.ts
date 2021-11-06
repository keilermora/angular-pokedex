import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonWeight',
})
export class PokemonWeightPipe implements PipeTransform {
  /**
   * Convertir hectogramos a kilogramos.
   * @param hectograms Peso del Pokémon en hectogramos.
   */
  transform(hectograms: number): string {
    return `${hectograms / 10}kg`;
  }
}
