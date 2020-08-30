import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';

import  { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: any[] = [];
  private pokemonsObservable: Observable<any> | null = null;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtener la lista de Pokémon.
   * La petición se hará 1 vez a la api, mientras que se tengan todos los pokémon solicitados
   */
  getPokemons(limit: number): Observable<any> {
    if(this.pokemons && this.pokemons.length >= limit) {
      return of(this.pokemons.slice(0, limit));
    } else if(this.pokemonsObservable) {
      return this.pokemonsObservable;
    } else {
      this.pokemonsObservable = this.http.get(`${environment.pokeApi}/pokemon/?limit=${limit}`)
        .pipe(map((response:any) => {
          this.pokemonsObservable = null;
          this.pokemons = response.results;
          return this.pokemons;
        })).pipe(share());

      return this.pokemonsObservable;
    }
  }
}
