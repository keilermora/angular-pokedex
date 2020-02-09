import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .replace(/-f$/g, '♀')
      .replace(/-m$/g, '♂')
      .replace(/^mr-/g, 'Mr. ');
  }
}
