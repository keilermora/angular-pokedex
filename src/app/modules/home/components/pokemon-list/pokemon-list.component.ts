import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@data/services/pokemon.service';
import { Pokedex } from '@data/types/pokedex';
import { PokedexService } from '@data/services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokedex: Pokedex | null = null;
  pokemons: any[] = [];

  constructor(
    private pokedexService: PokedexService,
    private pokemonService: PokemonService
  ) {
    this.pokedexService.getPokedex().subscribe((pokedex: Pokedex) => {
      this.pokedex = pokedex;
      // Actualizar la lista de Pokémon
      this.updatePokemonList();
    });
  }

  ngOnInit() {
  }

  /**
   * Actualizar la lista de Pokémon
   */
  updatePokemonList(): void {
    if(this.pokedex && this.pokedex.version) {
      this.pokemonService.getPokemons(this.pokedex.version.limit).subscribe(pokemons => {
        this.pokemons = pokemons;
      });
    }
  }
}
