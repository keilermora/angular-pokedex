import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UseCase from '../../../base/use-case';
import PokemonModel from '@app/domain/pokemon/pokemon.model';
import { PokemonRepositoryImpl } from '@data/repository/pokemon.repository.impl';

@Injectable({
  providedIn: 'root',
})
export class GetAllPokemonsByLimitUseCase implements UseCase<number, PokemonModel[]> {
  constructor(private pokemonRepository: PokemonRepositoryImpl) {}

  execute(limit: number): Observable<PokemonModel[]> {
    return this.pokemonRepository.getAllPokemonsByLimit(limit);
  }
}
