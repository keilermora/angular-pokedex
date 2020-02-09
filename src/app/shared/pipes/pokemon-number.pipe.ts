import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber'
})
export class PokemonNumberPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().padStart(3, '0');
  }
}
