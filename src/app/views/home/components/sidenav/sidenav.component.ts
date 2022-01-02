import { Component, OnInit } from '@angular/core';
import FilterModel from '@app/services/filter/filter.model';
import { FilterService } from '@app/services/filter/filter.service';
import PokedexVersionModel from '@app/services/pokedex-version/pokedex-version.model';
import { PokedexVersionService } from '@app/services/pokedex-version/pokedex-version.service';
import { PokemonTypeService } from '@app/services/pokemon-type/pokemon-type.service';
import { PokemonTypeModel } from '@app/services/pokemon/pokemon.model';
import { faSearch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  iconSearch: IconDefinition = faSearch;
  iconTimes: IconDefinition = faTimes;

  showNav: boolean = true;
  pokedexVersions: PokedexVersionModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  currentPokemonName!: string;
  currentPokemonTypeId!: number;
  currentVersionId!: number;

  constructor(
    private filterService: FilterService,
    private pokemonTypeService: PokemonTypeService,
    private pokedexVersionService: PokedexVersionService
  ) {
    this.filterService.getFilter().subscribe((filter: FilterModel) => {
      this.currentVersionId = filter.pokedexVersionId;
      this.currentPokemonName = filter.pokemonName;
      this.currentPokemonTypeId = filter.pokemonTypeId;
    });

    this.pokedexVersions = this.pokedexVersionService.getAllPokedexVersions();

    this.pokemonTypeService.getAllPokemonTypes().subscribe((pokemonTypes: PokemonTypeModel[]) => {
      this.pokemonTypes = pokemonTypes;
    });
  }

  ngOnInit() {}

  /**
   * Establecer el nombre del Pokémon y actualizar los query params.
   * @param {string} pokemonName - Nombre del Pokémon.
   */
  changePokemonName(pokemonName: string) {
    this.filterService.setPokemonName(pokemonName);
  }

  /**
   * Establecer el tipo de Pokémon y actualizar los query params.
   * @param {string} pokemonTypeId - Número identificador del tipo de Pokémon
   */
  changePokemonType(pokemonTypeId: string) {
    this.filterService.setPokemonTypeId(pokemonTypeId);
  }

  /**
   * Establecer la versión de la Pokédex y actualizar los query params.
   * @param {number} versionId - Número identificador de la versión.
   */
  changeVersion(versionId: number) {
    this.filterService.setPokedexVersionId(versionId);
  }
}
