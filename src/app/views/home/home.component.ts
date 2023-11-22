import { Component, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import FilterModel from 'src/app/core/services/filter/filter.model';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import { PokedexVersionService } from 'src/app/core/services/pokedex-version/pokedex-version.service';
import PokemonTypeModel from 'src/app/core/services/pokemon-type/pokemon-type.model';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    DialogBoxComponent,
    NgOptimizedImage,
    PokemonListComponent,
    StatusBarComponent,
    SidebarComponent,
  ],
})
export class HomeComponent implements OnInit {
  isBusy = true;
  filter = {} as FilterModel;
  pokedexVersion = {} as PokedexVersionModel;
  pokemons: PokemonModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  since = 0;
  until = 0;

  private filterService = inject(FilterService);
  private pokedexVersionService = inject(PokedexVersionService);
  private pokemonService = inject(PokemonService);

  constructor() {
    this.filterService
      .getFilter()
      .pipe(
        takeUntilDestroyed(),
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
        }),
        switchMap((pokemons) => {
          return of(this.filterService.sortPokemons(pokemons));
        })
      )
      .subscribe((pokemons: PokemonModel[]) => {
        this.pokemons = pokemons;
        this.isBusy = false;
      });
  }

  ngOnInit() {
    // Set since and until years
    const pokedexVersions = this.pokedexVersionService.getAllPokedexVersions();
    this.since = pokedexVersions[0].releasedYear;
    this.until = pokedexVersions[pokedexVersions.length - 1].releasedYear;
  }
}
