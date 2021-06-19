import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '@data/services/pokemon.service';
import { Pokemon } from '@data/types/pokemon';
import { PokemonFlavorTextEntry } from '@data/types/pokemon-flavor-text-entry';
import { PokemonGenera } from '@data/types/pokemon-genera';
import { missingNo } from '@data/mocks/missingno.mock';
import { missingNoGenera } from '@data/mocks/missingno-genera.mock';
import { missingNoFlavorTextEntries } from '@data/mocks/missingno-flavor-text-entries.mock';
import { PokemonSpecie } from '@data/types/pokemon-specie';
import { environment } from '@env';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | null = null;
  pokemonGenera: PokemonGenera | undefined = undefined;
  pokemonFlavorTextEntries: PokemonFlavorTextEntry[] = [];

  busy: boolean;
  busyDetails: boolean;
  error: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    this.busy = true;
    this.busyDetails = true;
  }

  ngOnInit() {
    let pokemonId;

    this.route.params.subscribe(({ id }) => {
      let routeParamId = id;
      pokemonId = routeParamId ? parseInt(routeParamId) : 0;

      this.getPokemon(pokemonId);
      this.getPokemonSpecie(pokemonId);
    });
  }

  getPokemon(pokemonId: number) {
    this.pokemonService.getPokemon(pokemonId).subscribe(
      (pokemon) => {
        this.pokemon = pokemon;
      },
      (error) => {
        console.error(error);
        this.pokemon = missingNo;
      },
      () => {
        this.busy = false;
      }
    );
  }

  getPokemonSpecie(pokemonId: number) {
    this.pokemonService.getPokemonSpecie(pokemonId).subscribe(
      (pokemonSpecie: PokemonSpecie) => {
        // Obtener el tipo de Pokémon.
        const pokemonGenera: PokemonGenera | undefined =
          pokemonSpecie.genera.find(
            (genera: PokemonGenera) =>
              genera.language.name === environment.language
          );

        // Obtener los registros de la Pokédex en español.
        let pokemonFlavorTextEntries: PokemonFlavorTextEntry[] =
          pokemonSpecie.flavor_text_entries.filter(
            (flavorTextEntry: PokemonFlavorTextEntry) =>
              flavorTextEntry.language.name === environment.language
          );

        // Eliminar registros duplicados.
        pokemonFlavorTextEntries = pokemonFlavorTextEntries.reduce(
          (acc: PokemonFlavorTextEntry[], cur: PokemonFlavorTextEntry) => {
            const elementFound: PokemonFlavorTextEntry | undefined = acc.find(
              (flavorTextEntry: PokemonFlavorTextEntry) =>
                flavorTextEntry.version.name === cur.version.name
            );
            return elementFound ? acc : acc.concat([cur]);
          },
          []
        );

        // Eliminar texto descriptivo duplicados entre versiones.
        pokemonFlavorTextEntries = pokemonFlavorTextEntries.reduce(
          (acc: PokemonFlavorTextEntry[], cur: PokemonFlavorTextEntry) => {
            const elementFound: PokemonFlavorTextEntry | undefined = acc.find(
              (flavorTextEntry: PokemonFlavorTextEntry) =>
                flavorTextEntry.flavor_text === cur.flavor_text
            );
            if (elementFound) {
              elementFound.flavor_text = '';
            }
            return acc.concat([cur]);
          },
          []
        );

        this.pokemonGenera = pokemonGenera;
        this.pokemonFlavorTextEntries = pokemonFlavorTextEntries;
      },
      (error) => {
        console.error(error);
        this.pokemonGenera = missingNoGenera;
        this.pokemonFlavorTextEntries = missingNoFlavorTextEntries;
      },
      () => {
        this.busyDetails = false;
      }
    );
  }
}
