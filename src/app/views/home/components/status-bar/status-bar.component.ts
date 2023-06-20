import { Component, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import FilterModel from 'src/app/core/services/filter/filter.model';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import PokemonSortByEnum from 'src/app/data/enums/pokemon-sort-by.enum';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
})
export class StatusBarComponent {
  pokemonSortByNameASC = PokemonSortByEnum.NAME_ASC;
  pokemonSortByNumberASC = PokemonSortByEnum.NUMBER_ASC;
  pokemonSortByHeightASC = PokemonSortByEnum.HEIGHT_ASC;
  pokemonSortByWeightASC = PokemonSortByEnum.WEIGHT_ASC;

  pokemonSortByNameDSC = PokemonSortByEnum.NAME_DSC;
  pokemonSortByNumberDSC = PokemonSortByEnum.NUMBER_DSC;
  pokemonSortByHeightDSC = PokemonSortByEnum.HEIGHT_DSC;
  pokemonSortByWeightDSC = PokemonSortByEnum.WEIGHT_DSC;

  currentPokemonSortBy!: PokemonSortByEnum;

  _pokemons: PokemonModel[] = [];

  @Input({ required: true }) set pokemons(pokemons: PokemonModel[]) {
    this._pokemons = pokemons;
  }

  constructor(private filterService: FilterService) {
    this.filterService
      .getFilter()
      .pipe(takeUntilDestroyed())
      .subscribe((filter: FilterModel) => {
        this.currentPokemonSortBy = filter.pokemonSortBy as PokemonSortByEnum;
      });
  }

  changePokemonSortBy(pokemonSortBy: PokemonSortByEnum) {
    this.filterService.setPokemonSortBy(pokemonSortBy);
  }
}
