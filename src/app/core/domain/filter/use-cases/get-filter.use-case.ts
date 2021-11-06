import { Injectable } from '@angular/core';
import UseCase from '@app/base/use-case';
import { FilterRepositoryImpl } from '@data/repository/filter.repository.impl';
import { Observable } from 'rxjs';
import FilterModel from '../filter.model';

@Injectable({
  providedIn: 'root',
})
export class GetFilterUseCase implements UseCase<void, FilterModel> {
  constructor(private filterRepository: FilterRepositoryImpl) {}

  execute(): Observable<FilterModel> {
    return this.filterRepository.getFilter();
  }
}
