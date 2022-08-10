import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import getPokemonSpecieQuery from '../../../data/graphql/get-pokemon-specie.graphql';
import QueryResultsDataInterface from 'src/app/shared/interfaces/query-results-data.interface';
import { environment } from 'src/environments/environment';
import PokemonSpecieMapper from './pokemon-specie.mapper';
import { PokemonSpecieModel } from './pokemon-specie.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpecieService {
  constructor(private apollo: Apollo) {}

  /**
   * Get a Pokémon specie by Pokémon Id
   * @param {number} pokemonId - Identifier of the Pokémon
   * @returns {Observable<PokemonSpecieModel>}
   */
  getPokemonSpecieByPokemonId(pokemonId: number): Observable<PokemonSpecieModel> {
    return this.apollo
      .query<QueryResultsDataInterface>({
        query: getPokemonSpecieQuery,
        variables: {
          pokemonId,
          languageId: environment.languageId,
        },
      })
      .pipe(
        map(({ data }) => {
          const pokemonSpecieEntities = data.pokemon_v2_pokemonspecies;
          const pokemonSpecieModels = pokemonSpecieEntities.map(PokemonSpecieMapper.mapFrom);
          return pokemonSpecieModels[0];
        })
      );
  }
}
