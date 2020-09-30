import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokedex } from '@data/types/pokedex';
import { PokedexVersion } from '@data/types/pokedex-version';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokedexSubject: BehaviorSubject<Pokedex>;
  private pokedex: Pokedex;

  private pokedexVersions: PokedexVersion[];

  constructor() {
    const imagesPath = environment.imagesPath;

    this.pokedexVersions = [
      new PokedexVersion(1, 'Green', `${imagesPath}/pokemon-green.png`, false, 151),
      new PokedexVersion(2, 'Red & Blue', `${imagesPath}/pokemon-red-and-blue.png`, false, 151),
      new PokedexVersion(3, 'Yellow', `${imagesPath}/pokemon-yellow.png`, false, 151),
      new PokedexVersion(4, 'Gold', `${imagesPath}/pokemon-gold.png`, false, 251),
      new PokedexVersion(5, 'Silver', `${imagesPath}/pokemon-silver.png`, false, 251),
      new PokedexVersion(6, 'Crystal', `${imagesPath}/pokemon-crystal`, true, 251),
    ];

    this.pokedex = new Pokedex(null, '');
    this.pokedexSubject = new BehaviorSubject(this.pokedex);
  }

  /**
   * Actualiza el observable de la Pokédex
   */
  private refresh(): void {
    this.pokedexSubject.next(this.pokedex);
  }

  /**
   * Obtiene la Pokédex
   */
  getPokedex(): Observable<Pokedex> {
    return this.pokedexSubject.asObservable();
  }

  /**
   * Obtiene el listado de versiones de la Pokédex
   */
  getPokedexVersions(): PokedexVersion[] {
    return this.pokedexVersions;
  }

  /**
   * Actualizar la versión de la Pokédex
   * @param versionId Número identificador de la versión
   */
  setPokedexVersion(versionId: number): void {
    const pokedexVersion = this.pokedexVersions.find((version) => {
      return version.id === versionId;
    });

    if(!pokedexVersion) {
      console.warn(`La versión de Pokédex ${versionId} no existe. Se mostrará la primera versión por defecto`);
      this.pokedex.version = this.pokedexVersions[0];
    } else {
      this.pokedex.version = pokedexVersion
    }

    this.refresh();
  }

  /**
   * Actualizar el nombre del Pokémon a filtrar
   * @param pokemonName Nombre del Pokémon
   */
  setPokemonName(pokemonName: string): void {
    this.pokedex.pokemonName = pokemonName;
    this.refresh();
  }
}
