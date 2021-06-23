import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  faSearch,
  faTimes,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import Pokedex, { PokedexVersion } from '@data/types/pokedex';
import { PokedexService } from '@data/services/pokedex.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  iconSearch: IconDefinition = faSearch;
  iconTimes: IconDefinition = faTimes;

  showNav: boolean = true;
  pokedexVersions: PokedexVersion[];
  currentPokemonName!: string;
  currentVersionId!: number;

  @Input() set pokedex(pokedex: Pokedex) {
    this.currentVersionId = pokedex.version.id;
    this.currentPokemonName = pokedex.pokemonName;
  }

  constructor(private pokedexService: PokedexService, private router: Router) {
    this.pokedexVersions = this.pokedexService.getPokedexVersions();
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
