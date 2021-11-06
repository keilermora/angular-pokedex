import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UseCase from '../../../base/use-case';
import { PokemonTypeRepositoryImpl } from '../../../../data/repository/pokemon-type.repository.impl';
import PokemonTypeModel from '@app/domain/pokemon-type/pokemon-type.model';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonTypesByNameUseCase implements UseCase<string, PokemonTypeModel> {
  constructor(private pokemonTypeRepository: PokemonTypeRepositoryImpl) {}

  execute(name: string): Observable<PokemonTypeModel> {
    return this.pokemonTypeRepository.getPokemonTypeByName(name);
  }
}
