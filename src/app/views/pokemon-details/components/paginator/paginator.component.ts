import { Component, Input } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  iconLeft = faArrowLeft;
  iconRight = faArrowRight;

  @Input() busy: boolean = true;

  @Input() pokemonSpecie: PokemonSpecieModel = {} as PokemonSpecieModel;
}
