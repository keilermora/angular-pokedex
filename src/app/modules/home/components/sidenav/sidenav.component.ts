import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faSearch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Pokedex, { PokedexVersion } from '@data/types/pokedex';
import { PokedexService } from '@data/services/pokedex.service';
import { PokemonTypeV2 } from '@data/types/pokemon';
import { PokemonTypeService } from '@data/services/pokemon-type.service';
import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';

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
  pokedexVersions: PokedexVersion[];
  pokemonTypes: PokemonTypeV2[] = [];
  currentPokemonName!: string;
  currentPokemonSortBy!: PokemonSortByEnum;
  currentPokemonTypeId!: number;
  currentVersionId!: number;

  @Input() set pokedex(pokedex: Pokedex) {
    this.currentVersionId = pokedex.version.id;
    this.currentPokemonName = pokedex.pokemonName;
    this.currentPokemonTypeId = pokedex.pokemonTypeId;
    this.currentPokemonSortBy = pokedex.pokemonSortBy;
  }

  constructor(
    private pokedexService: PokedexService,
    private pokemonTypeService: PokemonTypeService,
    private router: Router
  ) {
    this.pokedexVersions = this.pokedexService.getPokedexVersions();

    this.pokemonTypeService.getPokemonTypes().subscribe((pokemonTypes: PokemonTypeV2[]) => {
      this.pokemonTypes = pokemonTypes;
    });
  }

  ngOnInit() {}

  /**
   * Establecer el nombre del Pokémon y actualizar los query params.
   * @param {string} pokemonName - Nombre del Pokémon.
   */
  changePokemonName(pokemonName: string): void {
    const name = pokemonName ? pokemonName.toLowerCase().trim() : '';
    this.pokedexService.setPokemonName(name);
    this.updateQueryParams({ pokemon: name || null } as NavigationExtras);
  }

  /**
   * Establecer el indicador par aordenar la lista de Pokémon y actualizar los query params.
   * @param {PokemonSortByEnum} pokemonSortBy - Indicador para ordenar la lista de Pokémon
   */
  changePokemonSortBy(pokemonSortBy: PokemonSortByEnum): void {
    this.pokedexService.setPokemonSortBy(pokemonSortBy);
    this.updateQueryParams({ sortBy: pokemonSortBy } as NavigationExtras);
  }

  /**
   * Establecer el tipo de Pokémon y actualizar los query params.
   * @param pokemonTypeId - Número identificador del tipo de Pokémon
   */
  changePokemonType(pokemonTypeId: string): void {
    this.pokedexService.setPokemonTypeId(parseInt(pokemonTypeId));
    this.updateQueryParams({ type: pokemonTypeId } as NavigationExtras);
  }

  /**
   * Establecer la versión de la Pokédex y actualizar los query params.
   * @param {number} versionId - Número identificador de la versión.
   */
  changeVersion(versionId: number): void {
    this.pokedexService.setPokedexVersion(versionId);
    this.updateQueryParams({ version: versionId } as NavigationExtras);
  }

  /**
   * Actualizar los query params.
   * @param {any} queryParams - Párametros de consulta.
   */
  private updateQueryParams(queryParams: NavigationExtras): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
