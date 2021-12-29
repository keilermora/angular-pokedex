import { Component, Input, OnInit } from '@angular/core';
import PokedexVersionModel from '@app/domain/pokedex-version/pokedex-version.model';
import PokemonModel from '@app/domain/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  _pokemon: PokemonModel = {} as PokemonModel;
  _pokedexVersion: PokedexVersionModel = {} as PokedexVersionModel;

  @Input() set pokemon(pokemon: PokemonModel) {
    this._pokemon = pokemon;
  }

  @Input() set pokedexVersion(pokedexVersion: PokedexVersionModel) {
    this._pokedexVersion = pokedexVersion;
  }

  constructor() {}

  ngOnInit(): void {}
}
