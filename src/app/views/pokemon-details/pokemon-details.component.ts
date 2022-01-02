import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonSpecieModel } from '@app/services/pokemon-specie/pokemon-specie.model';
import { PokemonSpecieService } from '@app/services/pokemon-specie/pokemon-specie.service';
import PokemonModel from '@app/services/pokemon/pokemon.model';
import { missingNo } from '@data/mocks/missingno.mock';
import fadeIn from 'app/shared/animations/fadeIn';

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
  error: boolean = false;

  constructor(private route: ActivatedRoute, private pokemonSpecieService: PokemonSpecieService) {}

  ngOnInit() {
    let pokemonId;
    this.route.params.subscribe(({ id }) => {
      let routeParamId = id;
      pokemonId = routeParamId ? parseInt(routeParamId) : 0;
      this.pokemon.id = pokemonId;
      this.busy = true;
      this.getPokemonSpecie(pokemonId);
    });
  }

  getPokemonSpecie(pokemonId: number) {
    this.pokemonSpecieService
      .getPokemonSpecieByPokemonId(pokemonId)
      .subscribe(
        (pokemonSpecie) => {
          this.pokemonSpecie = pokemonSpecie || missingNo;
        },
        (error) => {
          console.error(error);
          this.pokemonSpecie = missingNo;
        }
      )
      .add(() => {
        this.busy = false;
      });
  }
}
