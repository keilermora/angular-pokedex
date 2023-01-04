import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';

@Component({
  selector: 'app-pokedex-entries',
  templateUrl: './pokedex-entries.component.html',
  styleUrls: ['./pokedex-entries.component.scss'],
})
export class PokedexEntriesComponent {
  @Input() busy: boolean = true;

  @Input() pokemonSpecie: PokemonSpecieModel | null = null;
}
