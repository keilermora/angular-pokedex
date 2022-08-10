import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'pokemonStat',
})
export class PokemonStatPipe implements PipeTransform {
  /**
   * Translate.
   * @param stat Pokémon statistic title.
   */
  transform(stat: string): string {
    if (environment.language === 'en') {
      switch (stat) {
        case 'special-attack':
          return 'spcl. atk.';
        case 'special-defense':
          return 'spcl. def.';
        default:
          return stat;
      }
    } else {
      // if (environment.language === 'es') {
      switch (stat) {
        case 'hp':
          return 'ps';
        case 'attack':
          return 'ataque';
        case 'defense':
          return 'defensa';
        case 'special-attack':
          return 'at. esp.';
        case 'special-defense':
          return 'def. esp.';
        case 'speed':
          return 'velocidad';
        default:
          return 'desconocido';
      }
    }
  }
}
