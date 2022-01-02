import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonEntity from './pokemon.entity';
import PokemonMapper from './pokemon.mapper';
import { Apollo } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import QueryResultsData from '../query-results-data';
import getPokemonsQuery from '@data/queries/get-pokemons.query';
import PokemonModel from './pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: PokemonModel[];
  pokemons$!: Observable<PokemonModel[]>;
  fetchingPokemons: boolean = false;

  constructor(private apollo: Apollo, private http: HttpClient) {
    const pokemons = localStorage.getItem('pokemons-v4');
    this.pokemons = pokemons ? JSON.parse(pokemons) : [];
  }

  getPokemonById(id: number): Observable<PokemonModel> {
    return this.http
      .get<PokemonEntity>(`${environment.pokeApi}/pokemon/${id}`)
      .pipe(map(PokemonMapper.mapFrom));
  }

  getAllPokemonsByLimit(limit: number): Observable<PokemonModel[]> {
    if (this.pokemons.length >= limit) {
      return of(this.pokemons.slice(0, limit));
    } else if (!this.fetchingPokemons) {
      this.fetchingPokemons = true;
      this.pokemons$ = this.apollo
        .query<QueryResultsData>({
          query: getPokemonsQuery(limit),
        })
        .pipe(
          map(({ data }) => {
            return data.pokemon_v2_pokemon;
          }),
          map((pokemonEntity: PokemonEntity[]) => pokemonEntity.map(PokemonMapper.mapFrom)),
          map((pokemons: PokemonModel[]) => {
            localStorage.setItem('pokemons-v4', JSON.stringify(pokemons));
            this.pokemons = pokemons;
            this.fetchingPokemons = false;
            return pokemons;
          })
        );
    }
    return this.pokemons$;
  }
}
