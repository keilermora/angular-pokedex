import { Component, Input } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { PokemonNamePipe } from '../../../../shared/pipes/pokemon-name/pokemon-name.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QueryParamsHandlingDirective } from '../../../../shared/directives/query-params-handling.directive';
import { HideElementDirective } from '../../../../shared/directives/hide-element.directive';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [
    HideElementDirective,
    QueryParamsHandlingDirective,
    RouterLink,
    NgIf,
    FontAwesomeModule,
    PokemonNamePipe,
  ],
})
export class PaginatorComponent {
  iconLeft = faArrowLeft;
  iconRight = faArrowRight;

  @Input() busy: boolean = true;

  @Input() pokemonSpecie: PokemonSpecieModel = {} as PokemonSpecieModel;
}
