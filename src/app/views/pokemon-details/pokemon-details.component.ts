import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { PokemonSpecieService } from 'src/app/core/services/pokemon-specie/pokemon-specie.service';
import PokemonModel from 'src/app/core/services/pokemon/pokemon.model';
import { missingNo } from 'src/app/data/constants/missingno.constant';
import fadeIn from 'src/app/shared/animations/fadeIn';
import { PokedexEntriesComponent } from './components/pokedex-entries/pokedex-entries.component';
import { BattleStatsComponent } from './components/battle-stats/battle-stats.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  animations: [fadeIn],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BattleStatsComponent,
    PokedexEntriesComponent,
    PokemonProfileComponent,
  ],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon = {} as PokemonModel;
  pokemonSpecie = {} as PokemonSpecieModel;

  busy = true;
  error = false;

  constructor(
    private destroyRef: DestroyRef,
    private pokemonSpecieService: PokemonSpecieService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    let pokemonId;
    this.route.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ id }) => {
      pokemonId = id ? parseInt(id) : 0;
      this.pokemon.id = pokemonId;
      this.getPokemonSpecie(pokemonId);
    });

    this.translate.onLangChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.getPokemonSpecie(this.pokemon.id);
    });
  }

  getPokemonSpecie(pokemonId: number) {
    this.busy = true;
    this.pokemonSpecieService
      .getPokemonSpecieByPokemonId(pokemonId)
      .pipe(takeUntilDestroyed(this.destroyRef))
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
