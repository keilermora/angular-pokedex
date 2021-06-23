import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PokedexService } from '@data/services/pokedex.service';
import { PokemonService } from '@data/services/pokemon.service';
import Pokedex from '@data/types/pokedex';
import Pokemon from '@data/types/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  busy: boolean = false;
  pokedex: Pokedex = {} as Pokedex;
  pokemons: Pokemon[] = [];

  constructor(
    private pokedexService: PokedexService,
    private pokemonService: PokemonService
  ) {
    this.pokedexService
      .getPokedex()
      .pipe(
        switchMap((pokedex: Pokedex) => {
          this.pokedex = pokedex;
          this.busy = true;
          return this.pokemonService.getPokemons(pokedex.version.limit);
        })
      )
      .subscribe((pokemons: Pokemon[]) => {
        this.updatePokemonList(pokemons, this.pokedex);
        this.busy = false;
      });
  }

  ngOnInit() {}

  /**
   * Actualizar la lista de Pokémon, según los filtros de la Pokédex.
   * @param {Pokemon[]} pokemons - Nueva lista de Pokémon.
   * @param {Pokedex} pokedex - Pokédex actual.
   */
  updatePokemonList(pokemons: Pokemon[], pokedex: Pokedex): void {
    const { pokemonName } = pokedex;

    if (pokemonName) {
      const re = new RegExp(pokemonName, 'g');
      this.pokemons = pokemons.filter((pokemon: Pokemon) =>
        re.test(pokemon.name)
      );
    } else {
      this.pokemons = pokemons;
    }
  }
}
