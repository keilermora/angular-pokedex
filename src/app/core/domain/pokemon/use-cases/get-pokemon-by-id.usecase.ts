import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UseCase from '../../../base/use-case';
import { PokemonRepositoryImpl } from '@data/repository/pokemon.repository.impl';
import PokemonModel from '@app/domain/pokemon/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonByIdUseCase implements UseCase<number, PokemonModel> {
  constructor(private pokemonRepository: PokemonRepositoryImpl) {}

  execute(id: number): Observable<PokemonModel> {
    return this.pokemonRepository.getPokemonById(id);
  }
}
