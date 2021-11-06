import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import getPokemonTypesQuery from '@data/queries/get-pokemon-types.query';
import QueryResultsData from '@app/domain/query-results-data';
import { PokemonV2TypeEntity } from '@app/domain/pokemon-type/pokemon-type.entity';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  constructor(private apollo: Apollo) {}

  getPokemonTypes(): Observable<PokemonV2TypeEntity[]> {
    return this.apollo.query<QueryResultsData>({ query: getPokemonTypesQuery }).pipe(
      map(({ data }: ApolloQueryResult<QueryResultsData>) => {
        return data.pokemon_v2_type;
      })
    );
  }
}
