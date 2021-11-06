import { Injectable } from '@angular/core';
import UseCase from '@app/base/use-case';
import { FilterRepositoryImpl } from '@data/repository/filter.repository.impl';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SetPokemonNameUseCase implements UseCase<string, void> {
  constructor(private filterRepository: FilterRepositoryImpl) {}

  execute(name: string): Observable<void> {
    return of(this.filterRepository.setPokemonName(name));
  }
}
