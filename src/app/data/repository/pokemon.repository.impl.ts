import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonEntity from '../../core/domain/pokemon/pokemon.entity';
import PokemonMapper from '../../core/domain/pokemon/pokemon.mapper';
import PokemonModel from '@app/domain/pokemon/pokemon.model';
import PokemonRepository from '@app/domain/pokemon/pokemon.repository';
import { PokemonService } from '@data/services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonRepositoryImpl implements PokemonRepository {
  pokemons: PokemonModel[];
  pokemons$!: Observable<PokemonModel[]>;
  fetchingPokemons: boolean = false;

  constructor(private pokemonService: PokemonService) {
    const pokemons = localStorage.getItem('pokemons-v4');
    this.pokemons = pokemons ? JSON.parse(pokemons) : [];
  }

  getPokemonById(id: number): Observable<PokemonModel> {
    return this.pokemonService.getPokemonById(id).pipe(map(PokemonMapper.mapFrom));
  }

  getAllPokemonsByLimit(limit: number): Observable<PokemonModel[]> {
    if (this.pokemons.length >= limit) {
      return of(this.pokemons.slice(0, limit));
    } else if (!this.fetchingPokemons) {
      this.fetchingPokemons = true;
      this.pokemons$ = this.pokemonService.getAllPokemonsByLimit(limit).pipe(
        map((pokemonEntity: PokemonEntity[]) => pokemonEntity.map(PokemonMapper.mapFrom)),
        map((pokemons: PokemonModel[]) => {
          localStorage.setItem('pokemons-v4', JSON.stringify(pokemons));
          this.pokemons = pokemons;
          this.fetchingPokemons = false;
          return pokemons;
        })
      );
    }
    return this.pokemons$;
  }
}
