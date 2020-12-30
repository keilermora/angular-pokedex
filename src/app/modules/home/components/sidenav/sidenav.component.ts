import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { PokedexVersion } from '@data/types/pokedex-version';
import { PokedexService } from '@data/services/pokedex.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  iconSearch: IconDefinition = faSearch;
  iconTimes: IconDefinition = faTimes;

  showNav: boolean = true;
  pokedexVersions: PokedexVersion[];
  currentVersionId: number = 1;
  currentPokemonName: string = '';

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pokedexVersions = this.pokedexService.getPokedexVersions();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const versionId = params['version'];
      this.currentVersionId = versionId ? parseInt(versionId) : 1;
      this.pokedexService.setPokedexVersion(this.currentVersionId);

      const pokemonName = params['pokemon'];
      this.currentPokemonName = pokemonName;
      this.pokedexService.setPokemonName(pokemonName);
    });
  }

  changeVersion(versionId: number) {

    // Establecer la versión de la Pokédex
    this.pokedexService.setPokedexVersion(versionId);

    // Actualizar query param
    this.router.navigate([], {
      queryParams: {
        version: versionId,
      },
      queryParamsHandling: 'merge',
    });
  }

  changePokemonName(pokemonName: string): void {
    const name = pokemonName.toLowerCase();

    // Establecer el nombre del Pokémon
    this.pokedexService.setPokemonName(name);

    // Actualizar query param
    this.router.navigate([], {
      queryParams: {
        pokemon: name || null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
