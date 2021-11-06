import { Injectable } from '@angular/core';
import UseCase from '@app/base/use-case';
import { FilterRepositoryImpl } from '@data/repository/filter.repository.impl';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SetPokedexVersionIdUseCase implements UseCase<number, void> {
  constructor(private filterRepository: FilterRepositoryImpl) {}

  execute(id: number): Observable<void> {
    return of(this.filterRepository.setPokedexVersionId(id));
  }
}
