import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { TranslateModule } from '@ngx-translate/core';
import { I18nKeyPipe } from '../../../../shared/pipes/i18n-key/i18n-key.pipe';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-pokedex-entries',
  templateUrl: './pokedex-entries.component.html',
  styleUrls: ['./pokedex-entries.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, NgIf, NgFor, NgClass, I18nKeyPipe, TranslateModule],
})
export class PokedexEntriesComponent {
  @Input() busy: boolean = true;

  @Input() pokemonSpecie: PokemonSpecieModel | null = null;
}
