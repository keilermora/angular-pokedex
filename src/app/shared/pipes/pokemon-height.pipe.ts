import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonHeight',
})
export class PokemonHeightPipe implements PipeTransform {
  /**
   * Convertir decímetros a metros.
   * @param decimeters Altura del Pokémon en decímetros.
   */
  transform(decimeters: number): string {
    return `${decimeters / 10}m`;
  }
}
