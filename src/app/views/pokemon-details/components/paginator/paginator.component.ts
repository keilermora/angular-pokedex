import { Component, Input } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { PokemonNamePipe } from '../../../../shared/pipes/pokemon-name/pokemon-name.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterLink } from '@angular/router';
import { QueryParamsHandlingDirective } from '../../../../shared/directives/query-params-handling/query-params-handling.directive';
import { HideElementDirective } from 'src/app/shared/directives/hide-element/hide-element.directive';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [
    HideElementDirective,
    QueryParamsHandlingDirective,
    RouterLink,
    FontAwesomeModule,
    PokemonNamePipe,
  ],
})
export class PaginatorComponent {
  iconLeft = faArrowLeft;
  iconRight = faArrowRight;

  @Input({ required: true }) isBusy: boolean = true;
  @Input({ required: true }) pokemonSpecie: PokemonSpecieModel = {} as PokemonSpecieModel;
}
