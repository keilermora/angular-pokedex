import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { getPokemonSpecieQuery } from 'src/app/data/queries/get-pokemon-specie.query';
import QueryResultsData from '../query-results-data';
import { PokemonSpecieEntity } from './pokemon-specie.entity';
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
