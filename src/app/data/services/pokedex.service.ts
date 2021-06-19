import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokedex } from '@data/types/pokedex';
import { PokedexVersion } from '@data/types/pokedex-version';
import { ActivatedRoute } from '@angular/router';
import { pokedexVersions } from '@data/mocks/pokedex-versions.mock';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private pokedex: Pokedex = {} as Pokedex;
  private pokedexVersions: PokedexVersion[];
  private pokedexSubject: BehaviorSubject<Pokedex>;

  constructor(private route: ActivatedRoute) {
    this.pokedexVersions = pokedexVersions;

    route.queryParams.subscribe(({ pokemon, version }) => {
      const pokemonName = pokemon || '';
      const versionId = version ? parseInt(version) : 0;

      this.pokedex = {
        pokemonName,
        version: this.getPokedexVersion(versionId) || this.pokedexVersions[0],
      };
    });

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

  getPokedexVersion(versionId: number): PokedexVersion | undefined {
    return this.pokedexVersions.find((version) => version.id === versionId);
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
}
