import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { PokemonSpecieService } from 'src/app/core/services/pokemon-specie/pokemon-specie.service';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import { missingNo } from 'src/app/data/mocks/missingno.mock';
import fadeIn from 'src/app/shared/animations/fadeIn';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  animations: [fadeIn],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon = {} as PokemonModel;
  pokemonSpecie = {} as PokemonSpecieModel;

  busy = true;
  error = false;

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
      .subscribe({
        next: (pokemonSpecie) => {
          this.pokemonSpecie = pokemonSpecie || missingNo;
        },
        error: (error) => {
          console.error(error);
          this.pokemonSpecie = missingNo;
        },
      })
      .add(() => {
        this.busy = false;
      });
  }
}
