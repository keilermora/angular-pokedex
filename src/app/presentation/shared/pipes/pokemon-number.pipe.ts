import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber',
})
export class PokemonNumberPipe implements PipeTransform {
  /**
   * El formato del número del Pokémon debe ser de mínimo 3 caracteres.
   * Los números van desde el 001 hasta el 999.
   * @param number Número del Pokémon.
   */
  transform(number: number): string {
    if (number) {
      return number.toString().padStart(3, '0');
    }

    return '000';
  }
}
