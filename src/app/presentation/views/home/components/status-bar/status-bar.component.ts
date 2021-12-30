import { Component, Input, OnInit } from '@angular/core';
import FilterModel from '@app/domain/filter/filter.model';
import { GetFilterUseCase } from '@app/domain/filter/use-cases/get-filter.use-case';
import { SetPokemonSortByUseCase } from '@app/domain/filter/use-cases/set-pokemon-sort-by.use-case';
import PokemonModel from '@app/domain/pokemon/pokemon.model';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent implements OnInit {
  pokemonSortByNameASC: PokemonSortByEnum = PokemonSortByEnum.NAME_ASC;
  pokemonSortByNumberASC: PokemonSortByEnum = PokemonSortByEnum.NUMBER_ASC;
  pokemonSortByHeightASC: PokemonSortByEnum = PokemonSortByEnum.HEIGHT_ASC;
  pokemonSortByWeightASC: PokemonSortByEnum = PokemonSortByEnum.WEIGHT_ASC;

  pokemonSortByNameDSC: PokemonSortByEnum = PokemonSortByEnum.NAME_DSC;
  pokemonSortByNumberDSC: PokemonSortByEnum = PokemonSortByEnum.NUMBER_DSC;
  pokemonSortByHeightDSC: PokemonSortByEnum = PokemonSortByEnum.HEIGHT_DSC;
  pokemonSortByWeightDSC: PokemonSortByEnum = PokemonSortByEnum.WEIGHT_DSC;

  currentPokemonSortBy!: PokemonSortByEnum;

  _pokemons: PokemonModel[] = [];

  @Input() set pokemons(pokemons: PokemonModel[]) {
    this._pokemons = pokemons;
  }

  constructor(
    private getFilter: GetFilterUseCase,
    private setPokemonSortBy: SetPokemonSortByUseCase
  ) {
    this.getFilter.execute().subscribe((filter: FilterModel) => {
      this.currentPokemonSortBy = filter.pokemonSortBy as PokemonSortByEnum;
    });
  }

  ngOnInit(): void {}

  /**
   * Establecer el indicador para ordenar la lista de Pokémon y actualizar los query params.
   * @param {PokemonSortByEnum} pokemonSortBy - Indicador para ordenar la lista de Pokémon
   */
  changePokemonSortBy(pokemonSortBy: PokemonSortByEnum): void {
    this.setPokemonSortBy.execute(pokemonSortBy);
  }
}
