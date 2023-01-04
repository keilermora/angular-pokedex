import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { PokemonSpecieModel } from './pokemon-specie.model';
import getPokemonSpecieQuery from '../../../data/graphql/get-pokemon-specie.graphql';
import PokemonSpecieMapper from './pokemon-specie.mapper';
import PokemonSpecieQueryResultsInterface from 'src/app/shared/interfaces/pokemon-specie-query-results.interface';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpecieService {
  constructor(private apollo: Apollo, private languageService: LanguageService) {}

  /**
   * Get a Pokémon specie by Pokémon Id
   * @param {number} pokemonId - Identifier of the Pokémon
   * @returns {Observable<PokemonSpecieModel>}
   */
  getPokemonSpecieByPokemonId(pokemonId: number): Observable<PokemonSpecieModel> {
    const currentLanguage = this.languageService.getCurrentLanguage();

    return this.apollo
      .query<PokemonSpecieQueryResultsInterface>({
        query: getPokemonSpecieQuery,
        variables: {
          pokemonId,
          languageId: currentLanguage.id,
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
