import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokedexEntriesComponent } from './components/pokedex-entries/pokedex-entries.component';
import { BattleStatsComponent } from './components/battle-stats/battle-stats.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailsComponent,
  },
];

@NgModule({
  declarations: [
    PokemonDetailsComponent,
    PokedexEntriesComponent,
    BattleStatsComponent,
    BreadcrumbComponent,
    PaginatorComponent,
    PokemonProfileComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class PokemonDetailsModule {}
