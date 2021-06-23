import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedexVersionName',
})
export class PokedexVersionNamePipe implements PipeTransform {
  /**
   * Algunos nombres de versión de Pokédex deben ser formateados.
   * @param name Nombre de la versión de Pokédex.
   */
  transform(name: string): string {
    return name.replace(/-/g, ' ').replace(/lets/g, "let's");
  }
}
