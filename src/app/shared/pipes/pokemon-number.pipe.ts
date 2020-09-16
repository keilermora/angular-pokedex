import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber'
})
export class PokemonNumberPipe implements PipeTransform {

  transform(number: number): string {
    return number.toString().padStart(3, '0');
  }
}
