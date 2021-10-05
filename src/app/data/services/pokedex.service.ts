import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import Pokedex, { PokedexVersion } from '@data/types/pokedex';
import { pokedexVersions } from '@data/mocks/pokedex-versions.mock';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private pokedex: Pokedex = {} as Pokedex;
  private pokedexVersions: PokedexVersion[];
  private pokedexSubject: Subject<Pokedex>;

  constructor(private route: ActivatedRoute) {
    this.pokedexVersions = pokedexVersions;
    this.pokedexSubject = new ReplaySubject<Pokedex>(1);

    route.queryParams.subscribe(({ pokemon, sortBy, type, version }) => {
      const pokemonName = pokemon || '';
      const pokemonTypeId = type ? parseInt(type) : 0;
      const versionId = version ? parseInt(version) : 0;
      const pokemonSortBy = sortBy || PokemonSortByEnum.NUMBER;

      this.pokedex = {
        pokemonName,
        pokemonTypeId,
        pokemonSortBy,
        version: this.getPokedexVersion(versionId),
      };
      this.refresh();
    });
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

  getPokedexVersion(versionId: number): PokedexVersion {
    return (
      this.pokedexVersions.find((version) => version.id === versionId) || this.pokedexVersions[0]
    );
  }

  /**
   * Obtiene el listado de versiones de la Pokédex.
   */
  getPokedexVersions(): PokedexVersion[] {
    return this.pokedexVersions;
  }

  /**
   * Actualizar la versión de la Pokédex
   * @param versionId Número identificador de la versión
   */
  setPokedexVersion(versionId: number): void {
    const pokedexVersion = this.getPokedexVersion(versionId);

    if (!pokedexVersion) {
      console.warn(
        `La versión de Pokédex ${versionId} no existe. Se mostrará la primera versión por defecto`
      );
      this.pokedex.version = this.pokedexVersions[0];
    } else {
      this.pokedex.version = pokedexVersion;
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

  setPokemonTypeId(pokemonTypeId: number) {
    this.pokedex.pokemonTypeId = pokemonTypeId;
    this.refresh();
  }

  setPokemonSortBy(sortBy: PokemonSortByEnum): void {
    this.pokedex.pokemonSortBy = sortBy;
    this.refresh();
  }
}
