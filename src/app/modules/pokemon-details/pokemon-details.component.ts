import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env';
import { PokemonService } from '@data/services/pokemon.service';
import Pokemon from '@data/types/pokemon';
import PokemonSpecie, {
  PokemonFlavorTextEntry,
  PokemonGenera,
} from '@data/types/pokemon-specie';
import missingNo, {
  missingNoFlavorTextEntries,
  missingNoGenera,
} from '@data/mocks/missingno.mock';
import fadeIn from '@shared/animations/fadeIn';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  animations: [fadeIn],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon = {} as Pokemon;
  pokemonGenera: PokemonGenera | undefined = {} as PokemonGenera;
  pokemonFlavorTextEntries: PokemonFlavorTextEntry[] = [];

  busy: boolean = true;
  busyDetails: boolean = true;
  error: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let pokemonId;

    this.route.params.subscribe(({ id }) => {
      let routeParamId = id;
      pokemonId = routeParamId ? parseInt(routeParamId) : 0;
      this.pokemon.id = pokemonId;
      this.busy = true;
      this.busyDetails = true;
      this.getPokemon(pokemonId);
      this.getPokemonSpecie(pokemonId);
    });
  }

  getPokemon(pokemonId: number) {
    this.pokemonService
      .getPokemon(pokemonId)
      .subscribe(
        (pokemon: Pokemon) => {
          this.pokemon = pokemon;
        },
        (error) => {
          console.error(error);
          this.pokemon = { ...missingNo };
        }
      )
      .add(() => {
        this.busy = false;
      });
  }

  getPokemonSpecie(pokemonId: number) {
    this.pokemonService
      .getPokemonSpecie(pokemonId)
      .subscribe(
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
        }
      )
      .add(() => {
        this.busyDetails = false;
      });
  }
}
