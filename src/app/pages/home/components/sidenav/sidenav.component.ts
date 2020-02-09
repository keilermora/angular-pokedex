import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { pokedexVersions } from '../../../../configs/pokedex-versions';
import { PokedexVersion } from '../../../../shared/models/pokedex-version';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;

  showNav: boolean;
  pokedexVersions: PokedexVersion[];
  currentVersionId: number;

  constructor() { }

  ngOnInit() {
    this.showNav = true;
    this.pokedexVersions = pokedexVersions;
    this.currentVersionId = this.pokedexVersions[0].id;
  }

  changeVersion(version) {
    this.currentVersionId = version;
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
