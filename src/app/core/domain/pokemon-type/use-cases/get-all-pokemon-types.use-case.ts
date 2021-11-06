import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UseCase from '../../../base/use-case';
import PokemonTypeModel from '@app/domain/pokemon-type/pokemon-type.model';
import { PokemonTypeRepositoryImpl } from '../../../../data/repository/pokemon-type.repository.impl';

@Injectable({
  providedIn: 'root',
})
export class GetAllPokemonTypesUseCase implements UseCase<void, PokemonTypeModel[]> {
  constructor(private pokemonTypeRepository: PokemonTypeRepositoryImpl) {}

  execute(): Observable<PokemonTypeModel[]> {
    return this.pokemonTypeRepository.getAllPokemonTypes();
  }
}
