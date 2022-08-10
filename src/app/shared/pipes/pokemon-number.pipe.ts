import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber',
})
export class PokemonNumberPipe implements PipeTransform {
  /**
   * Pokémon numbers are between 001 and 999.
   * It's format must have min 3 characters.
   * @param number Pokémon number.
   */
  transform(number: number): string {
    if (number) {
      return number.toString().padStart(3, '0');
    }

    return '000';
  }
}
