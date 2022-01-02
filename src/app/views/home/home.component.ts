import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import FilterModel from '@app/services/filter/filter.model';
import PokedexVersionModel from '@app/services/pokedex-version/pokedex-version.model';
import PokemonModel, { PokemonTypeModel } from '@app/services/pokemon/pokemon.model';
import { FilterService } from '@app/services/filter/filter.service';
import { PokedexVersionService } from '@app/services/pokedex-version/pokedex-version.service';
import { PokemonService } from '@app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  busy: boolean = false;
  filter: FilterModel = {} as FilterModel;
  pokedexVersion: PokedexVersionModel = {} as PokedexVersionModel;
  pokemons: PokemonModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  since: number = 0;
  until: number = 0;

  constructor(
    private filterService: FilterService,
    private pokedexVersionService: PokedexVersionService,
    private pokemonService: PokemonService
  ) {
    this.filterService
      .getFilter()
      .pipe(
        switchMap((filter: FilterModel) => {
          this.filter = filter;
          return of(this.pokedexVersionService.getPokedexVersionById(filter.pokedexVersionId));
        }),
        switchMap((pokedexVersion: PokedexVersionModel) => {
          this.pokedexVersion = pokedexVersion;
          return this.pokemonService.getAllPokemonsByLimit(pokedexVersion.limit);
        }),
        switchMap((pokemons) => {
          return of(this.filterService.filterPokemons(pokemons));
        })
      )
      .subscribe((pokemons: PokemonModel[]) => {
        this.pokemons = pokemons;
        this.busy = false;
      });

    const pokedexVersions = this.pokedexVersionService.getAllPokedexVersions();
    this.since = pokedexVersions[0].releasedYear;
    this.until = pokedexVersions[pokedexVersions.length - 1].releasedYear;
  }

  ngOnInit() {}
}
