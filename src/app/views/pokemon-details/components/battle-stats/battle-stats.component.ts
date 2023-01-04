import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';

@Component({
  selector: 'app-battle-stats',
  templateUrl: './battle-stats.component.html',
  styleUrls: ['./battle-stats.component.scss'],
})
export class BattleStatsComponent {
  @Input() busy: boolean = true;

  @Input() pokemonSpecie: PokemonSpecieModel | null = null;
}
