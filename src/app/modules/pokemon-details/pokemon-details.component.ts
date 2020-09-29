import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '@data/services/pokemon.service';
import { Pokemon } from '@data/types/pokemon';
import { PokemonFlavorTextEntry } from '@data/types/pokemon-flavor-text-entry';
import { PokemonGenera } from '@data/types/pokemon-genera';
import { missingNo } from '@data/mocks/missingno.mock';
import { missingNoGenera } from '@data/mocks/missingno-genera.mock';
import { missingNoFlavorTextEntries } from '@data/mocks/missingno-flavor-text-entries.mock';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | null = null;
  pokemonGenera: PokemonGenera | null = null;
  pokemonFlavorTextEntries: PokemonFlavorTextEntry[] = [];

  busy: boolean = false;
  busyDetails: boolean = false;
  error:boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let pokemonId;

    this.route.paramMap.subscribe((paramMap) => {
      this.busy = true;
      this.busyDetails = true;

      let routeParamId = paramMap.get('id');
      pokemonId = routeParamId ? parseInt(routeParamId) : 0;

      this.pokemonService.getPokemon(pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon;
        this.busy = false;
      }, error => {
        console.log(error);
        this.pokemon = missingNo;
        this.busy = false;
      });

      this.pokemonService.getPokemonSpecie(pokemonId).subscribe((pokemonSpecie) => {
        // Obtener el tipo de Pokémon.
        const pokemonGenera = pokemonSpecie.genera.find((genera: any) => {
          return genera.language.name === 'es';
        });

        // Obtener los registros de la Pokédex en español.
        const pokemonFlavorTextEntriesES = pokemonSpecie.flavor_text_entries.filter((flavorTextEntry: PokemonFlavorTextEntry) => {
          return flavorTextEntry.language.name === 'es';
        });

        // Eliminar duplicados.
        const uniquePokemonFlavorTextEntries = pokemonFlavorTextEntriesES.reduce((accumulator: any, currentValue: PokemonFlavorTextEntry) => {
          const x = accumulator.find((flavorTextEntry: PokemonFlavorTextEntry) => {
            return flavorTextEntry.version.name === currentValue.version.name;
          });
          return !x ? accumulator.concat([ currentValue ]) : accumulator;
        }, []);

        this.pokemonGenera = pokemonGenera;
        this.pokemonFlavorTextEntries = uniquePokemonFlavorTextEntries;
        this.busyDetails = false;
      }, error => {
        console.log(error);
        this.pokemonGenera = missingNoGenera;
        this.pokemonFlavorTextEntries = missingNoFlavorTextEntries;
        this.busyDetails = false;
      });
    })
  }
}
