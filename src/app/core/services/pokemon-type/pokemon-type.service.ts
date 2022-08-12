import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of, tap } from 'rxjs';
import PokemonTypeMapper from './pokemon-type.mapper';
import PokemonTypeModel from './pokemon-type.model';
import getPokemonTypesQuery from '../../../data/graphql/get-pokemon-types.graphql';
import PokemonTypesQueryResults from 'src/app/shared/interfaces/pokemon-types-query-results.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  private pokemonTypes: PokemonTypeModel[];
  private pokemonTypes$!: Observable<PokemonTypeModel[]>;
  private fetchingPokemonTypes = false;

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
        .query<PokemonTypesQueryResults>({ query: getPokemonTypesQuery })
        .pipe(
          map(({ data }) => {
            const pokemonEntities = data.pokemon_v2_type;
            return pokemonEntities.map(PokemonTypeMapper.mapFrom);
          }),
          tap((pokemonTypes: PokemonTypeModel[]) => {
            localStorage.setItem('pokemons-types', JSON.stringify(pokemonTypes));
            this.pokemonTypes = pokemonTypes;
            this.fetchingPokemonTypes = false;
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
