import { Component, Input, OnInit } from '@angular/core';
import FilterModel from '@app/services/filter/filter.model';
import { FilterService } from '@app/services/filter/filter.service';
import PokemonModel from '@app/services/pokemon/pokemon.model';
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

  constructor(private filterService: FilterService) {
    this.filterService.getFilter().subscribe((filter: FilterModel) => {
      this.currentPokemonSortBy = filter.pokemonSortBy as PokemonSortByEnum;
    });
  }

  ngOnInit() {}

  /**
   * Establecer el indicador para ordenar la lista de Pokémon y actualizar los query params.
   * @param {PokemonSortByEnum} pokemonSortBy - Indicador para ordenar la lista de Pokémon
   */
  changePokemonSortBy(pokemonSortBy: PokemonSortByEnum) {
    this.filterService.setPokemonSortBy(pokemonSortBy);
  }
}