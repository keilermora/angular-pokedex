import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of, tap } from 'rxjs';
import getPokemonsQuery from '../../../data/graphql/get-pokemons.graphql';
import PokemonMapper from './pokemon.mapper';
import PokemonModel from './pokemon.model';
import PokemonsQueryResultsInterface from 'src/app/shared/interfaces/pokemons-query-results.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: PokemonModel[];
  private pokemons$!: Observable<PokemonModel[]>;
  private fetchingPokemons = false;

  constructor(private apollo: Apollo) {
    const pokemons = localStorage.getItem('pokemons-v4');
    this.pokemons = pokemons ? JSON.parse(pokemons) : [];
  }

  getAllPokemonsByLimit(limit: number): Observable<PokemonModel[]> {
    if (this.pokemons.length >= limit) {
      return of(this.pokemons.slice(0, limit));
    } else if (!this.fetchingPokemons) {
      this.fetchingPokemons = true;
      this.pokemons$ = this.apollo
        .query<PokemonsQueryResultsInterface>({
          query: getPokemonsQuery,
          variables: {
            limit: limit,
          },
        })
        .pipe(
          map(({ data }): PokemonModel[] => {
            const pokemonEntities = data.pokemon_v2_pokemon;
            return pokemonEntities.map(PokemonMapper.mapFrom);
          }),
          tap((pokemons) => {
            localStorage.setItem('pokemons-v4', JSON.stringify(pokemons));
            this.pokemons = pokemons;
            this.fetchingPokemons = false;
          })
        );
    }
    return this.pokemons$;
  }
}
