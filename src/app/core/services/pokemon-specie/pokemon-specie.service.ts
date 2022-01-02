import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonSpecieMapper from './pokemon-specie.mapper';
import PokemonSpecieModel from '@app/services/pokemon-specie/pokemon-specie.model';
import { HttpClient } from '@angular/common/http';
import PokemonSpecieEntity from './pokemon-specie.entity';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpecieService {
  constructor(private http: HttpClient) {}

  /**
   * Get a Pokémon specie by Pokémon Id
   * @param {number} pokemonId - Identifier of the Pokémon
   * @returns {Observable<PokemonSpecieModel>}
   */
  getPokemonSpecieByPokemonId(pokemonId: number): Observable<PokemonSpecieModel> {
    return this.http
      .get<PokemonSpecieEntity>(`${environment.pokeApi}/pokemon-species/${pokemonId}`)
      .pipe(map(PokemonSpecieMapper.mapFrom));
  }
}
