import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env';
import Pokemon from '@app/domain/pokemon/pokemon.model';
import { Apollo } from 'apollo-angular';
import QueryResultsData from '@app/domain/query-results-data';
import getPokemonsQuery from '@data/queries/get-pokemons.query';
import { ApolloQueryResult } from '@apollo/client/core';
import PokemonRepository from '@app/domain/pokemon/pokemon.repository';
import PokemonEntity from '@app/domain/pokemon/pokemon.entity';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  getPokemonById(id: number): Observable<PokemonEntity> {
    return this.http.get<PokemonEntity>(`${environment.pokeApi}/pokemon/${id}`);
  }

  /**
   * Obtener la lista de Pokémon.
   * La petición se hará 1 vez a la api, mientras que se tenga la cantidad de
   * pokémon solicitados.
   * @param {number} limit - Límite de la cantidad de pokémon.
   */
  getAllPokemonsByLimit(limit: number): Observable<PokemonEntity[]> {
    return this.apollo
      .query<QueryResultsData>({
        query: getPokemonsQuery(limit),
      })
      .pipe(
        map(({ data }: ApolloQueryResult<QueryResultsData>) => {
          return data.pokemon_v2_pokemon;
        })
      );
  }
}
