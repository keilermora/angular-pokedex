import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import PokemonSortByEnum from 'src/app/data/enums/pokemon-sort-by.enum';
import QueryParamsInterface from 'src/app/shared/interfaces/query-params.interface';
import PokemonModel from '../pokemon/pokemon.model';
import FilterModel from './filter.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filter = {} as FilterModel;
  private filterSubject: Subject<FilterModel>;

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    this.filterSubject = new ReplaySubject<FilterModel>(1);

    this.activatedRoute.queryParams.subscribe(
      ({ pokemon, sortBy, type, version }: QueryParamsInterface) => {
        this.filter = {
          pokedexVersionId: version ? parseInt(version) : 1,
          pokemonName: pokemon || '',
          pokemonSortBy: sortBy || PokemonSortByEnum.NUMBER_ASC,
          pokemonTypeId: type ? parseInt(type) : 0,
        };
        this.refresh();
      }
    );
  }

  filterPokemons(pokemons: PokemonModel[]): PokemonModel[] {
    const { pokemonName, pokemonTypeId } = this.filter;

    let pokemonResults = [...pokemons];

    if (pokemonName) {
      const re = new RegExp(pokemonName);
      pokemonResults = pokemonResults.filter((pokemon) => re.test(pokemon.name));
    }

    if (pokemonTypeId) {
      pokemonResults = pokemonResults.filter((pokemon) =>
        pokemon.types?.some((pokemonType) => pokemonType.id === pokemonTypeId)
      );
    }

    return pokemonResults;
  }

  getFilter(): Observable<FilterModel> {
    return this.filterSubject.asObservable();
  }

  setPokedexVersionId(pokedexVersionId: number) {
    this.filter.pokedexVersionId = pokedexVersionId;
    this.updateQueryParams({ version: pokedexVersionId } as NavigationExtras);
  }

  setPokemonName(pokemonName: string) {
    const name = pokemonName ? pokemonName.toLowerCase().trim() : '';
    this.filter.pokemonName = name;
    this.updateQueryParams({ pokemon: name || null } as NavigationExtras);
  }

  setPokemonTypeId(pokemonTypeId: string) {
    this.filter.pokemonTypeId = parseInt(pokemonTypeId);
    this.updateQueryParams({ type: pokemonTypeId } as NavigationExtras);
  }

  setPokemonSortBy(sortBy: string) {
    this.updateQueryParams({ sortBy: sortBy } as NavigationExtras);
    this.filter.pokemonSortBy = sortBy;
  }

  sortPokemons(pokemons: PokemonModel[]): PokemonModel[] {
    const { pokemonSortBy } = this.filter;

    // The Pokémon list is sorted by number by default
    let pokemonResults = [...pokemons];

    if (pokemonSortBy === PokemonSortByEnum.NAME_ASC) {
      pokemonResults.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.WEIGHT_ASC) {
      pokemonResults.sort((a, b) => (a.weight > b.weight ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.HEIGHT_ASC) {
      pokemonResults.sort((a, b) => (a.height > b.height ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.NUMBER_DSC) {
      pokemonResults.sort((a, b) => (a.id < b.id ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.NAME_DSC) {
      pokemonResults.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.WEIGHT_DSC) {
      pokemonResults.sort((a, b) => (a.weight < b.weight ? 1 : -1));
    } else if (pokemonSortBy === PokemonSortByEnum.HEIGHT_DSC) {
      pokemonResults.sort((a, b) => (a.height < b.height ? 1 : -1));
    }

    return pokemonResults;
  }

  private refresh() {
    this.filterSubject.next(this.filter);
  }

  private updateQueryParams(queryParams: NavigationExtras) {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
