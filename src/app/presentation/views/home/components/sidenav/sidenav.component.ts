import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';
import { GetAllPokemonTypesUseCase } from '@app/domain/pokemon-type/use-cases/get-all-pokemon-types.use-case';
import PokemonTypeModel from '@app/domain/pokemon-type/pokemon-type.model';
import { GetAllPokedexVersionsUseCase } from '@app/domain/pokedex-version/use-cases/get-all-pokedex-versions.use-case';
import PokedexVersionModel from '@app/domain/pokedex-version/pokedex-version.model';
import { SetPokemonNameUseCase } from '@app/domain/filter/use-cases/set-pokemon-name.use-case';
import { SetPokemonTypeIdUseCase } from '@app/domain/filter/use-cases/set-pokemon-type-id.use-case';
import { SetPokedexVersionIdUseCase } from '@app/domain/filter/use-cases/set-pokedex-version-id.use-case';
import { GetFilterUseCase } from '@app/domain/filter/use-cases/get-filter.use-case';
import FilterModel from '@app/domain/filter/filter.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  iconSearch: IconDefinition = faSearch;
  iconTimes: IconDefinition = faTimes;

  pokemonSortByName: PokemonSortByEnum = PokemonSortByEnum.NAME;
  pokemonSortByNumber: PokemonSortByEnum = PokemonSortByEnum.NUMBER;

  showNav: boolean = true;
  pokedexVersions: PokedexVersionModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  currentPokemonName!: string;
  currentPokemonTypeId!: number;
  currentVersionId!: number;

  constructor(
    private getAllPokemonTypes: GetAllPokemonTypesUseCase,
    private getAllPokedexVersions: GetAllPokedexVersionsUseCase,
    private getFilter: GetFilterUseCase,
    private setPokedexVersionId: SetPokedexVersionIdUseCase,
    private setPokemonName: SetPokemonNameUseCase,
    private setPokemonTypeId: SetPokemonTypeIdUseCase
  ) {
    this.getFilter.execute().subscribe((filter: FilterModel) => {
      this.currentVersionId = filter.pokedexVersionId;
      this.currentPokemonName = filter.pokemonName;
      this.currentPokemonTypeId = filter.pokemonTypeId;
    });

    this.getAllPokedexVersions.execute().subscribe((pokedexVersions: PokedexVersionModel[]) => {
      this.pokedexVersions = pokedexVersions;
    });

    this.getAllPokemonTypes.execute().subscribe((pokemonTypes: PokemonTypeModel[]) => {
      this.pokemonTypes = pokemonTypes;
    });
  }

  ngOnInit() {}

  /**
   * Establecer el nombre del Pokémon y actualizar los query params.
   * @param {string} pokemonName - Nombre del Pokémon.
   */
  changePokemonName(pokemonName: string): void {
    this.setPokemonName.execute(pokemonName);
  }

  /**
   * Establecer el tipo de Pokémon y actualizar los query params.
   * @param {string} pokemonTypeId - Número identificador del tipo de Pokémon
   */
  changePokemonType(pokemonTypeId: string): void {
    this.setPokemonTypeId.execute(pokemonTypeId);
  }

  /**
   * Establecer la versión de la Pokédex y actualizar los query params.
   * @param {number} versionId - Número identificador de la versión.
   */
  changeVersion(versionId: number): void {
    this.setPokedexVersionId.execute(versionId);
  }
}
