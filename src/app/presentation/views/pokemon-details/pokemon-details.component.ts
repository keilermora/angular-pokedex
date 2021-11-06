import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PokemonModel from '@app/domain/pokemon/pokemon.model';
import missingNo, { missingNoSpecie } from '@data/mocks/missingno.mock';
import fadeIn from 'app/presentation/shared/animations/fadeIn';
import PokemonSpecieModel from '@app/domain/pokemon-specie/pokemon-specie.model';
import { GetPokemonByIdUseCase } from '@app/domain/pokemon/use-cases/get-pokemon-by-id.usecase';
import { GetPokemonSpecieByPokemonIdUseCase } from '@app/domain/pokemon-specie/use-cases/get-pokemon-specie-by-pokemon-id.usecase';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  animations: [fadeIn],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: PokemonModel = {} as PokemonModel;

  pokemonSpecie: PokemonSpecieModel = {} as PokemonSpecieModel;

  busy: boolean = true;
  busyDetails: boolean = true;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private getPokemonSpecieByPokemonId: GetPokemonSpecieByPokemonIdUseCase,
    private getPokemonById: GetPokemonByIdUseCase
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
    this.getPokemonById
      .execute(pokemonId)
      .subscribe(
        (pokemon: PokemonModel) => {
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
    this.getPokemonSpecieByPokemonId
      .execute(pokemonId)
      .subscribe(
        (pokemonSpecie: PokemonSpecieModel) => {
          this.pokemonSpecie = pokemonSpecie;
        },
        (error) => {
          console.error(error);
          this.pokemonSpecie = missingNoSpecie;
        }
      )
      .add(() => {
        this.busyDetails = false;
      });
  }
}
