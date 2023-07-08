import { Component, Input } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { I18nKeyPipe } from 'src/app/shared/pipes/i18n-key/i18n-key.pipe';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-pokedex-entries',
  templateUrl: './pokedex-entries.component.html',
  styleUrls: ['./pokedex-entries.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, NgIf, NgFor, NgClass, I18nKeyPipe, TranslateModule],
})
export class PokedexEntriesComponent {
  @Input({ required: true }) isBusy: boolean = true;
  @Input({ required: true }) pokemonSpecie: PokemonSpecieModel | null = null;
}
