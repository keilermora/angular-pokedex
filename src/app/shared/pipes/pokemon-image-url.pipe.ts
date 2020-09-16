import { Pipe, PipeTransform } from '@angular/core';
import { PokedexVersion } from '@data/types/pokedex-version';

@Pipe({
  name: 'pokemonImageUrl'
})
export class PokemonImageUrlPipe implements PipeTransform {

  transform(position: number, pokedexVersion: PokedexVersion): string {
    return `${pokedexVersion.spritesUrl}/${position + 1}.gif`;
  }

}
