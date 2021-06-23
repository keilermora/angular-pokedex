import { Component, OnInit } from '@angular/core';
import { PokedexService } from '@data/services/pokedex.service';
import Pokedex, { PokedexVersionPlatform } from '@data/types/pokedex';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  classTheme: string = '';

  constructor(private pokedexService: PokedexService) {
    this.pokedexService.getPokedex().subscribe((pokedex: Pokedex) => {
      this.classTheme = pokedex.version.platform.classTheme;
    });
  }

  ngOnInit(): void {}
}
