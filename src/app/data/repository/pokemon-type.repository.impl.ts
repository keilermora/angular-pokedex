import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import PokemonTypeModel from '@app/domain/pokemon-type/pokemon-type.model';
import PokemonTypeMapper from '../../core/domain/pokemon-type/pokemon-type.mapper';
import PokemonTypeRepository from '@app/domain/pokemon-type/pokemon-type.repository';
import { PokemonV2TypeEntity } from '../../core/domain/pokemon-type/pokemon-type.entity';
import { PokemonTypeService } from '@data/services/pokemon-type.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeRepositoryImpl implements PokemonTypeRepository {
  pokemonTypes: PokemonTypeModel[];
  pokemonTypes$!: Observable<PokemonTypeModel[]>;
  fetchingPokemonTypes: boolean = false;

  constructor(private pokemonTypeService: PokemonTypeService) {
    const pokemonTypes = localStorage.getItem('pokemon-types');
    this.pokemonTypes = pokemonTypes ? JSON.parse(pokemonTypes) : [];
  }

  getAllPokemonTypes(): Observable<PokemonTypeModel[]> {
    if (this.pokemonTypes.length) {
      return of(this.pokemonTypes);
    } else if (!this.fetchingPokemonTypes) {
      this.fetchingPokemonTypes = true;

      this.pokemonTypes$ = this.pokemonTypeService.getPokemonTypes().pipe(
        map((pokemonEntity: PokemonV2TypeEntity[]) => pokemonEntity.map(PokemonTypeMapper.mapFrom)),
        map((pokemonTypes: PokemonTypeModel[]) => {
          localStorage.setItem('pokemons-types', JSON.stringify(pokemonTypes));
          this.pokemonTypes = pokemonTypes;
          this.fetchingPokemonTypes = false;
          return pokemonTypes;
        })
      );
    }
    return this.pokemonTypes$;
  }

  getPokemonTypeByName(name: string): Observable<PokemonTypeModel> {
    return of(
      this.pokemonTypes.find(
        (pokemonTypeModel: PokemonTypeModel) => pokemonTypeModel.name === name
      ) || this.pokemonTypes[0]
    );
  }
}
