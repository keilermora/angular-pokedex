import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokedex } from '@data/types/pokedex';
import { PokedexVersion } from '@data/types/pokedex-version';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokedexSubject: BehaviorSubject<Pokedex>;
  private pokedex: Pokedex;

  private pokedexVersions: PokedexVersion[];

  constructor() {
    const IMG_PATH = '/assets/images';
    this.pokedexVersions = [
      new PokedexVersion(1, 'Green', `${IMG_PATH}/pokemon-green.png`, false, 151),
      new PokedexVersion(2, 'Red & Blue', `${IMG_PATH}/pokemon-red-and-blue.png`, false, 151),
      new PokedexVersion(3, 'Yellow', `${IMG_PATH}/pokemon-yellow.png`, false, 151),
      new PokedexVersion(4, 'Gold', `${IMG_PATH}/pokemon-gold.png`, false, 251),
      new PokedexVersion(5, 'Silver', `${IMG_PATH}/pokemon-silver.png`, false, 251),
      new PokedexVersion(6, 'Crystal', `${IMG_PATH}/pokemon-crystal`, true, 251),
    ];

    this.pokedex = new Pokedex(this.pokedexVersions[0]);
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
   * Actualizar la versión la Pokédex
   */
  setPokedexVersion(version: PokedexVersion): void {
    this.pokedex.version = version;
    this.refresh();
  }
}
