import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonNumberPipe } from '../../../../shared/pipes/pokemon-number/pokemon-number.pipe';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QueryParamsHandlingDirective } from '../../../../shared/directives/query-params-handling.directive';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [QueryParamsHandlingDirective, RouterLink, NgIf, PokemonNumberPipe, TranslateModule],
})
export class BreadcrumbComponent {
  @Input() busy: boolean = true;

  @Input() pokemonSpecie!: PokemonSpecieModel;
}
