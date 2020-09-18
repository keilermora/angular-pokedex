import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { PokedexVersion } from '@data/types/pokedex-version';
import { PokedexService } from '@data/services/pokedex.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;

  showNav: boolean = true;
  pokedexVersions: PokedexVersion[];
  currentVersionId: number = 1;

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

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
