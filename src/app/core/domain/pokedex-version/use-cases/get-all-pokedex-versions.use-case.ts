import { Injectable } from '@angular/core';
import UseCase from '@app/base/use-case';
import { PokedexVersionRepositoryImpl } from '@data/repository/pokedex-version.repository.impl';
import { Observable } from 'rxjs';
import PokedexVersionModel from '../pokedex-version.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllPokedexVersionsUseCase implements UseCase<void, PokedexVersionModel[]> {
  constructor(private pokedexVersionRepository: PokedexVersionRepositoryImpl) {}

  execute(): Observable<PokedexVersionModel[]> {
    return this.pokedexVersionRepository.getAllPokedexVersions();
  }
}
