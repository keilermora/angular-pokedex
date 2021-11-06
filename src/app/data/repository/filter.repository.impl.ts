import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import FilterModel from '../../core/domain/filter/filter.model';
import FilterRepository from '../../core/domain/filter/filter.repository';

@Injectable({
  providedIn: 'root',
})
export class FilterRepositoryImpl implements FilterRepository {
  private filterSubject: Subject<FilterModel>;

  filter: FilterModel = {} as FilterModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.filterSubject = new ReplaySubject<FilterModel>(1);

    activatedRoute.queryParams.subscribe(({ pokemon, sortBy, type, version }) => {
      this.filter = {
        pokedexVersionId: version ? parseInt(version) : 0,
        pokemonName: pokemon || '',
        pokemonSortBy: sortBy || PokemonSortByEnum.NUMBER,
        pokemonTypeId: type ? parseInt(type) : 0,
      };
      this.refresh();
    });
  }

  getFilter(): Observable<FilterModel> {
    return this.filterSubject.asObservable();
  }

  setPokedexVersionId(pokedexVersionId: number): void {
    this.filter.pokedexVersionId = pokedexVersionId;
    this.updateQueryParams({ version: pokedexVersionId } as NavigationExtras);
    this.refresh();
  }

  setPokemonName(pokemonName: string): void {
    const name = pokemonName ? pokemonName.toLowerCase().trim() : '';
    this.filter.pokemonName = name;
    this.updateQueryParams({ pokemon: name || null } as NavigationExtras);
    this.refresh();
  }

  setPokemonTypeId(pokemonTypeId: string): void {
    this.filter.pokemonTypeId = parseInt(pokemonTypeId);
    this.updateQueryParams({ type: pokemonTypeId } as NavigationExtras);
    this.refresh();
  }

  setPokemonSortBy(sortBy: string): void {
    this.updateQueryParams({ sortBy: sortBy } as NavigationExtras);
    this.filter.pokemonSortBy = sortBy;
    this.refresh();
  }

  /**
   * Actualiza el observable del filtro
   */
  private refresh(): void {
    this.filterSubject.next(this.filter);
  }

  /**
   * Actualizar los query params.
   * @param {NavigationExtras} queryParams - Parámetros de consulta.
   */
  private updateQueryParams(queryParams: NavigationExtras): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
