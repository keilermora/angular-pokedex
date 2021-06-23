import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonType',
})
export class PokemonTypePipe implements PipeTransform {
  /**
   * Traducir el tipo del Pokémon.
   * @param type Tipo.
   */
  transform(type: string): string {
    switch (type) {
      case 'bird':
        return 'pájaro';
      case 'bug':
        return 'bicho';
      case 'dark':
        return 'siniestro';
      case 'dragon':
        return type;
      case 'electric':
        return 'electrico';
      case 'fairy':
        return 'hada';
      case 'fighting':
        return 'luchador';
      case 'fire':
        return 'fuego';
      case 'flying':
        return 'volador';
      case 'ghost':
        return 'fantasma';
      case 'grass':
        return 'hierba';
      case 'ground':
        return 'tierra';
      case 'ice':
        return 'hielo';
      case 'normal':
        return type;
      case 'poison':
        return 'veneno';
      case 'psychic':
        return 'psíquico';
      case 'rock':
        return 'roca';
      case 'steel':
        return 'acero';
      case 'water':
        return 'agua';
      default:
        return 'desconocido';
    }
  }
}
