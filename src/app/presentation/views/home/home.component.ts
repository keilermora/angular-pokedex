import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs/operators';
import Pokedex from '@app/domain/filter/filter.model';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';
import PokemonModel, { PokemonTypeModel } from '@app/domain/pokemon/pokemon.model';
import { GetAllPokemonsByLimitUseCase } from '@app/domain/pokemon/use-cases/get-all-pokemons-by-limit.usecase';
import { GetFilterUseCase } from '@app/domain/filter/use-cases/get-filter.use-case';
import FilterModel from '@app/domain/filter/filter.model';
import { GetPokedexVersionByIdUseCase } from '@app/domain/pokedex-version/use-cases/get-pokedex-version-by-id.use-case';
import PokedexVersionModel from '@app/domain/pokedex-version/pokedex-version.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  busy: boolean = false;
  filter: FilterModel = {} as FilterModel;
  pokedexVersion: PokedexVersionModel = {} as PokedexVersionModel;
  pokemons: PokemonModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  constructor(
    private getFilter: GetFilterUseCase,
    private getAllPokemonsByLimit: GetAllPokemonsByLimitUseCase,
    private getPokedexVersionById: GetPokedexVersionByIdUseCase
  ) {
    this.busy = true;

    this.getFilter
      .execute()
      .pipe(
        concatMap((filter: FilterModel) => {
          this.filter = filter;
          return this.getPokedexVersionById.execute(filter.pokedexVersionId);
        }),
        concatMap((pokedexVersion: PokedexVersionModel) => {
          this.pokedexVersion = pokedexVersion;
          return this.getAllPokemonsByLimit.execute(pokedexVersion.limit);
        })
      )
      .subscribe((pokemons: PokemonModel[]) => {
        this.updatePokemonList(pokemons, this.filter);
        this.busy = false;
      });
  }

  ngOnInit() {}

  /**
   * Actualizar la lista de Pokémon, según los filtros de la Pokédex.
   * @param {Pokemon[]} pokemons - Nueva lista de Pokémon.
   * @param {Pokedex} pokedex - Pokédex actual.
   */
  updatePokemonList(pokemons: PokemonModel[], pokedex: Pokedex): void {
    const { pokemonName, pokemonTypeId, pokemonSortBy } = pokedex;

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
    if (pokemonSortBy === PokemonSortByEnum.NAME) {
      pokemonResults.sort((a: PokemonModel, b: PokemonModel) => (a.name > b.name ? 1 : -1));
    }

    this.pokemons = pokemonResults;
  }
}
