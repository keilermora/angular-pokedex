import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { pokedexVersions } from '../../../../configs/pokedex-versions';
import { PokedexVersion } from '@data/types/pokedex-version';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;

  showNav: boolean = true;
  pokedexVersions: PokedexVersion[] = pokedexVersions;
  currentVersionId: number = 1;

  constructor() { }

  ngOnInit() {
  }

  changeVersion(version: number) {
    this.currentVersionId = version;
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
