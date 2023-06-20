import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonWeightPipe } from '../../../../shared/pipes/pokemon-weight/pokemon-weight.pipe';
import { PokemonHeightPipe } from '../../../../shared/pipes/pokemon-height/pokemon-height.pipe';
import { I18nKeyPipe } from '../../../../shared/pipes/i18n-key/i18n-key.pipe';
import { NgIf, NgFor } from '@angular/common';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-battle-stats',
  templateUrl: './battle-stats.component.html',
  styleUrls: ['./battle-stats.component.scss'],
  standalone: true,
  imports: [
    DialogBoxComponent,
    NgIf,
    NgFor,
    I18nKeyPipe,
    PokemonHeightPipe,
    PokemonWeightPipe,
    TranslateModule,
  ],
})
export class BattleStatsComponent {
  @Input({ required: true }) busy: boolean = true;

  @Input({ required: true }) pokemonSpecie: PokemonSpecieModel | null = null;
}
