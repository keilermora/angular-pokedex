import { Injectable } from '@angular/core';
import { pokedexVersions } from 'src/app/data/mocks/pokedex-versions.mock';
import PokedexVersionModel from './pokedex-version.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexVersionService {
  pokedexVersions: PokedexVersionModel[];

  constructor() {
    this.pokedexVersions = pokedexVersions;
  }

  /**
   * Get all Pokédex versions
   * @returns {PokedexVersionModel[]}
   */
  getAllPokedexVersions(): PokedexVersionModel[] {
    return this.pokedexVersions;
  }

  /**
   * Get a Pokédex version by Id
   * @param {number} id - Identifier of the Pokédex version
   * @returns {PokedexVersionModel}
   */
  getPokedexVersionById(id: number): PokedexVersionModel {
    return this.pokedexVersions.find((version) => version.id === id) || this.pokedexVersions[0];
  }
}
