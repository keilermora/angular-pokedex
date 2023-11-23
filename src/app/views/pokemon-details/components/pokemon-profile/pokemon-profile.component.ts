import { Component, Input } from '@angular/core';

import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { PaginatorComponent } from '../paginator/paginator.component';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, PaginatorComponent],
})
export class PokemonProfileComponent {
  @Input({ required: true }) isBusy: boolean = true;
  @Input({ required: true }) pokemonSpecie!: PokemonSpecieModel;
}
