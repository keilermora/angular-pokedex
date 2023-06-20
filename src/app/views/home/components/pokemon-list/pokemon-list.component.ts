import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, TranslateModule],
})
export class PokemonListComponent {
  _busy: boolean = true;
  _pokedexVersion: PokedexVersionModel = {} as PokedexVersionModel;
  _pokemons: PokemonModel[] = [];

  @Input({ required: true }) set busy(busy: boolean) {
    this._busy = busy;
  }

  @Input({ required: true }) set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    this._pokedexVersion = pokedexVersion;
  }

  @Input({ required: true }) set pokemons(pokemons: PokemonModel[]) {
    this._pokemons = pokemons;
  }
}
