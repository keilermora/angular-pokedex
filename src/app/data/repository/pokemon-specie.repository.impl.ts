import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonSpecieMapper from '../../core/domain/pokemon-specie/pokemon-specie.mapper';
import PokemonSpecieModel from '@app/domain/pokemon-specie/pokemon-specie.model';
import PokemonSpecieRepository from '@app/domain/pokemon-specie/pokemon-specie.repository';
import { PokemonSpecieService } from '@data/services/pokemon-specie.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpecieRepositoryImpl implements PokemonSpecieRepository {
  constructor(private pokemonSpecieService: PokemonSpecieService) {}

  getPokemonSpecieByPokemonId(pokemonId: number): Observable<PokemonSpecieModel> {
    return this.pokemonSpecieService
      .getPokemonSpecieByPokemonId(pokemonId)
      .pipe(map(PokemonSpecieMapper.mapFrom));
  }
}
