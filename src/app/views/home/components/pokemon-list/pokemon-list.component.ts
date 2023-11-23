import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, PokemonCardComponent, TranslateModule],
})
export class PokemonListComponent {
  @Input({ required: true }) isBusy!: boolean;
  @Input({ required: true }) pokedexVersion!: PokedexVersionModel;
  @Input({ required: true }) pokemons!: PokemonModel[];
}
