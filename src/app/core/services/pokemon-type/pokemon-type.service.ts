import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonTypeModel from '@app/services/pokemon-type/pokemon-type.model';
import PokemonTypeMapper from './pokemon-type.mapper';
import { Apollo } from 'apollo-angular';
import QueryResultsData from '../query-results-data';
import getPokemonTypesQuery from '@data/queries/get-pokemon-types.query';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  pokemonTypes: PokemonTypeModel[];
  pokemonTypes$!: Observable<PokemonTypeModel[]>;
  fetchingPokemonTypes: boolean = false;

  constructor(private apollo: Apollo) {
    const pokemonTypes = localStorage.getItem('pokemon-types');
    this.pokemonTypes = pokemonTypes ? JSON.parse(pokemonTypes) : [];
  }

  /**
   * Get all Pokémon types
   * @returns {Observable<PokemonTypeModel[]>}
   */
  getAllPokemonTypes(): Observable<PokemonTypeModel[]> {
    if (this.pokemonTypes.length) {
      return of(this.pokemonTypes);
    } else if (!this.fetchingPokemonTypes) {
      this.fetchingPokemonTypes = true;

      this.pokemonTypes$ = this.apollo
        .query<QueryResultsData>({ query: getPokemonTypesQuery })
        .pipe(
          map(({ data }) => data.pokemon_v2_type),
          map((pokemonEntity) => pokemonEntity.map(PokemonTypeMapper.mapFrom)),
          map((pokemonTypes) => {
            localStorage.setItem('pokemons-types', JSON.stringify(pokemonTypes));
            this.pokemonTypes = pokemonTypes;
            this.fetchingPokemonTypes = false;
            return pokemonTypes;
          })
        );
    }
    return this.pokemonTypes$;
  }

  /**
   * Get a Pokémon type by it's name
   * @param {string} name - Name of the Pokémon type
   * @returns {PokemonTypeModel} The Pokémon type found. Otherwise, the first one.
   */
  getPokemonTypeByName(name: string): PokemonTypeModel {
    return (
      this.pokemonTypes.find((pokemonTypeModel) => pokemonTypeModel.name === name) ||
      this.pokemonTypes[0]
    );
  }
}
