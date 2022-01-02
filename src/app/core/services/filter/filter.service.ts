import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import PokemonTypeModel from '../pokemon-type/pokemon-type.model';
import PokemonModel from '../pokemon/pokemon.model';
import FilterModel from './filter.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject: Subject<FilterModel>;
  private filter: FilterModel = {} as FilterModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.filterSubject = new ReplaySubject<FilterModel>(1);

    this.activatedRoute.queryParams.subscribe(({ pokemon, sortBy, type, version }) => {
      this.filter = {
        pokedexVersionId: version ? parseInt(version) : 1,
        pokemonName: pokemon || '',
        pokemonSortBy: sortBy || PokemonSortByEnum.NUMBER_ASC,
        pokemonTypeId: type ? parseInt(type) : 0,
      };
      this.refresh();
    });
  }

  filterPokemons(pokemons: PokemonModel[]): PokemonModel[] {
    const { pokemonName, pokemonTypeId, pokemonSortBy } = this.filter;

    let pokemonResults = [...pokemons];

    if (pokemonName) {
      const re = new RegExp(pokemonName, 'g');
      pokemonResults = pokemonResults.filter((pokemon: PokemonModel) => re.test(pokemon.name));
    }

    if (pokemonTypeId) {
      pokemonResults = pokemonResults.filter((pokemon: PokemonModel) =>
        pokemon.types?.some((pokemonType: PokemonTypeModel) => pokemonType.id === pokemonTypeId)
      );
    }

    // La lista de Pokémon viene ordenada por números por defecto
    if (pokemonSortBy === PokemonSortByEnum.NAME_ASC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.name > b.name ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.WEIGHT_ASC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.weight > b.weight ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.HEIGHT_ASC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.height > b.height ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.NUMBER_DSC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.id < b.id ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.NAME_DSC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.name < b.name ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.WEIGHT_DSC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.weight < b.weight ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.HEIGHT_DSC) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.height < b.height ? 1 : -1));
    }

    return pokemonResults;
  }

  getFilter(): Observable<FilterModel> {
    return this.filterSubject.asObservable();
  }

  setPokedexVersionId(pokedexVersionId: number) {
    this.filter.pokedexVersionId = pokedexVersionId;
    this.updateQueryParams({ version: pokedexVersionId } as NavigationExtras);
    this.refresh();
  }

  setPokemonName(pokemonName: string) {
    const name = pokemonName ? pokemonName.toLowerCase().trim() : '';
    this.filter.pokemonName = name;
    this.updateQueryParams({ pokemon: name || null } as NavigationExtras);
    this.refresh();
  }

  setPokemonTypeId(pokemonTypeId: string) {
    this.filter.pokemonTypeId = parseInt(pokemonTypeId);
    this.updateQueryParams({ type: pokemonTypeId } as NavigationExtras);
    this.refresh();
  }

  setPokemonSortBy(sortBy: string) {
    this.updateQueryParams({ sortBy: sortBy } as NavigationExtras);
    this.filter.pokemonSortBy = sortBy;
    this.refresh();
  }

  /**
   * Actualiza el observable del filtro
   */
  private refresh() {
    this.filterSubject.next(this.filter);
  }

  /**
   * Actualizar los query params.
   * @param {NavigationExtras} queryParams - Parámetros de consulta.
   */
  private updateQueryParams(queryParams: NavigationExtras) {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
