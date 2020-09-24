import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@data/services/pokemon.service';
import { Pokedex } from '@data/types/pokedex';
import { PokedexService } from '@data/services/pokedex.service';
import { Pokemon } from '@data/types/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  busy: boolean = true;
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
    if(this.pokedex) {
      const { version, pokemonName } = this.pokedex;

      if(version) {
        this.busy = true;
        this.pokemonService.getPokemons(version.limit).subscribe(pokemons => {
          if(pokemonName) {
            const re = new RegExp(pokemonName);
            this.pokemons = pokemons.filter((pokemon: Pokemon) => re.test(pokemon.name));
          } else {
            this.pokemons = pokemons;
          }

          this.busy = false;
        });
      }
    }
  }
}
