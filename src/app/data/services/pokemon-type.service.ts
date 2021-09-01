import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import getPokemonTypesQuery from '@data/queries/get-pokemon-types.query';
import { PokemonTypeV2 } from '@data/types/pokemon';
import QueryResultsData from '@data/types/query-results-data';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  private pokemonTypes: PokemonTypeV2[];
  private pokemonTypes$!: Observable<PokemonTypeV2[]>;
  private fetchingPokemonTypes: boolean = false;

  constructor(private apollo: Apollo) {
    const pokemonTypes = localStorage.getItem('pokemon-types');
    this.pokemonTypes = pokemonTypes ? JSON.parse(pokemonTypes) : [];
  }

  getPokemonTypes(): Observable<PokemonTypeV2[]> {
    if (this.pokemonTypes.length) {
      return of(this.pokemonTypes);
    } else if (!this.fetchingPokemonTypes) {
      this.fetchingPokemonTypes = true;

      this.pokemonTypes$ = this.apollo
        .query<QueryResultsData>({
          query: getPokemonTypesQuery,
        })
        .pipe(
          map(({ data }: ApolloQueryResult<QueryResultsData>) => {
            this.pokemonTypes = data.pokemon_v2_type;
            console.log(this.pokemonTypes);
            localStorage.setItem('pokemons-types', JSON.stringify(this.pokemonTypes));
            this.fetchingPokemonTypes = false;
            return this.pokemonTypes;
          })
        );
    }
    return this.pokemonTypes$;
  }

  getPokemonType(name: string): PokemonTypeV2 {
    return (
      this.pokemonTypes.find((pokemonType: PokemonTypeV2) => pokemonType.name === name) ||
      this.pokemonTypes[0]
    );
  }
}
