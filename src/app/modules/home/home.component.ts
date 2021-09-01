import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PokedexService } from '@data/services/pokedex.service';
import { PokemonService } from '@data/services/pokemon.service';
import Pokedex from '@data/types/pokedex';
import Pokemon, { PokemonType, PokemonTypeContainer } from '@data/types/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  busy: boolean = false;
  pokedex: Pokedex = {} as Pokedex;
  pokemons: Pokemon[] = [];
  pokemonTypes: PokemonType[] = [];

  constructor(private pokedexService: PokedexService, private pokemonService: PokemonService) {
    this.busy = true;

    this.pokedexService
      .getPokedex()
      .pipe(
        switchMap((pokedex: Pokedex) => {
          this.pokedex = pokedex;
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
    const { pokemonName, pokemonTypeId } = pokedex;

    let pokemonResults = [...pokemons];

    if (pokemonName) {
      const re = new RegExp(pokemonName, 'g');
      pokemonResults = pokemonResults.filter((pokemon: Pokemon) => re.test(pokemon.name));
    }

    if (pokemonTypeId) {
      pokemonResults = pokemonResults.filter((pokemon: Pokemon) =>
        pokemon.pokemon_v2_pokemontypes?.some(
          (pokemonTypeContainer: PokemonTypeContainer) =>
            pokemonTypeContainer.pokemon_v2_type.id === pokemonTypeId
        )
      );
    }

    this.pokemons = pokemonResults;
  }
}
