import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { isEmpty, map, share } from 'rxjs/operators';

import { environment } from '@env';
import { Pokemon } from '@data/types/pokemon';
import { NamedPokeAPIResourceList } from '@data/types/named-poke-api-resource-list';
import { NamedPokeAPIResource } from '@data/types/named-poke-api-resource';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: Pokemon[];
  private pokemons$!: Observable<Pokemon[]>;
  private fetchingPokemons: boolean = false;

  constructor(private http: HttpClient) {
    const pokemons = localStorage.getItem('pokemons');
    this.pokemons = pokemons ? JSON.parse(pokemons) : [];
  }

  getPokemon(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      `${environment.pokeApi}/pokemon/${pokemonId}`
    );
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
      this.pokemons$ = this.http
        .get<NamedPokeAPIResourceList>(
          `${environment.pokeApi}/pokemon/?limit=${limit}`
        )
        .pipe(
          map((resourceList: NamedPokeAPIResourceList) => {
            this.pokemons = resourceList.results.map(
              (resource: NamedPokeAPIResource, index: number) => ({
                id: index + 1,
                name: resource.name,
              })
            );
            localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
            this.fetchingPokemons = false;
            return this.pokemons;
          }),
          share()
        );
    }
    return this.pokemons$;
  }

  getPokemonSpecie(pokemonId: number): Observable<any> {
    return this.http.get(`${environment.pokeApi}/pokemon-species/${pokemonId}`);
  }
}
