import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(name: string): string {
    return name
      .replace(/-f$/g, '♀')
      .replace(/-m$/g, '♂')
      .replace(/^mr-/g, 'Mr. ');
  }
}
