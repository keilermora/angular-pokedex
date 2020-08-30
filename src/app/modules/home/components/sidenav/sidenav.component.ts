import { Component, OnInit } from '@angular/core';
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
    private pokedexService: PokedexService
  ) {
    this.pokedexVersions = this.pokedexService.getPokedexVersions();
  }

  ngOnInit() {
  }

  changeVersion(version: PokedexVersion) {
    this.pokedexService.setPokedexVersion(version);
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
