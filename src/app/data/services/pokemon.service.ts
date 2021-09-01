import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { environment } from '@env';
import Pokemon from '@data/types/pokemon';
import { Apollo } from 'apollo-angular';
import QueryResultsData from '@data/types/query-results-data';
import getPokemonsQuery from '@data/queries/get-pokemons.query';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: Pokemon[];
  private pokemons$!: Observable<Pokemon[]>;
  private fetchingPokemons: boolean = false;

  constructor(private apollo: Apollo, private http: HttpClient) {
    const pokemons = localStorage.getItem('pokemons-v5');
    this.pokemons = pokemons ? JSON.parse(pokemons) : [];
  }

  getPokemon(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.pokeApi}/pokemon/${pokemonId}`);
  }

  /**
   * Obtener la lista de Pokémon.
   * La petición se hará 1 vez a la api, mientras que se tenga la cantidad de
   * pokémon solicitados.
   * @param {number} limit - Límite de la cantidad de pokémon.
   */
  getPokemons(limit: number): Observable<Pokemon[]> {
    if (this.pokemons.length >= limit) {
      return of(this.pokemons.slice(0, limit));
    } else if (!this.fetchingPokemons) {
      this.fetchingPokemons = true;

      this.pokemons$ = this.apollo
        .query<QueryResultsData>({
          query: getPokemonsQuery(limit),
        })
        .pipe(
          map(({ data }: ApolloQueryResult<QueryResultsData>) => {
            this.pokemons = data.pokemon_v2_pokemon;
            localStorage.setItem('pokemons-v2', JSON.stringify(this.pokemons));
            this.fetchingPokemons = false;
            return this.pokemons;
          })
        );
    }
    return this.pokemons$;
  }

  getPokemonSpecie(pokemonId: number): Observable<any> {
    return this.http.get(`${environment.pokeApi}/pokemon-species/${pokemonId}`);
  }
}
