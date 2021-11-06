import { Injectable } from '@angular/core';
import { pokedexVersions } from '@data/mocks/pokedex-versions.mock';
import { Observable, of } from 'rxjs';
import PokedexVersionModel from '../../core/domain/pokedex-version/pokedex-version.model';
import PokedexVersionRepository from '../../core/domain/pokedex-version/pokedex-version.repository';

@Injectable({
  providedIn: 'root',
})
export class PokedexVersionRepositoryImpl implements PokedexVersionRepository {
  pokedexVersions: PokedexVersionModel[];

  constructor() {
    this.pokedexVersions = pokedexVersions;
  }

  getAllPokedexVersions(): Observable<PokedexVersionModel[]> {
    return of(this.pokedexVersions);
  }

  getPokedexVersionById(id: number): Observable<PokedexVersionModel> {
    return of(this.pokedexVersions.find((version) => version.id === id) || this.pokedexVersions[0]);
  }
}
