import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonSpecieMapper from './pokemon-specie.mapper';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { PokemonSpecieModel } from './pokemon-specie.model';
import { PokemonSpecieEntity } from './pokemon-specie.entity';
import { Apollo } from 'apollo-angular';
import QueryResultsData from '../query-results-data';
import { getPokemonSpecieQuery } from '@data/queries/get-pokemon-specie.query';

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
      .query<QueryResultsData>({
        query: getPokemonSpecieQuery(pokemonId),
      })
      .pipe(
        map(({ data }) => data.pokemon_v2_pokemonspecies),
        map((pokemonEntity: PokemonSpecieEntity[]) =>
          pokemonEntity.map(PokemonSpecieMapper.mapFrom)
        ),
        map((pokemonSpecie: PokemonSpecieModel[]) => pokemonSpecie[0])
      );
  }
}
