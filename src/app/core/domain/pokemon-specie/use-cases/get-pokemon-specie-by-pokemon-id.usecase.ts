import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UseCase from '../../../base/use-case';
import PokemonSpecieModel from '@app/domain/pokemon-specie/pokemon-specie.model';
import { PokemonSpecieRepositoryImpl } from '@data/repository/pokemon-specie.repository.impl';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonSpecieByPokemonIdUseCase implements UseCase<number, PokemonSpecieModel> {
  constructor(private pokemonSpecieRepository: PokemonSpecieRepositoryImpl) {}

  execute(pokemonId: number): Observable<PokemonSpecieModel> {
    return this.pokemonSpecieRepository.getPokemonSpecieByPokemonId(pokemonId);
  }
}
