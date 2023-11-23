import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonNumberPipe } from '../../../../shared/pipes/pokemon-number/pokemon-number.pipe';

import { RouterLink } from '@angular/router';
import { QueryParamsHandlingDirective } from '../../../../shared/directives/query-params-handling/query-params-handling.directive';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [QueryParamsHandlingDirective, RouterLink, PokemonNumberPipe, TranslateModule],
})
export class BreadcrumbComponent {
  @Input({ required: true }) isBusy: boolean = true;
  @Input({ required: true }) pokemonSpecie!: PokemonSpecieModel;
}
