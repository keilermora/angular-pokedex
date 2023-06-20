import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeComponent,
    PokemonCardComponent,
    PokemonListComponent,
    SidebarComponent,
    StatusBarComponent,
  ],
})
export class HomeModule {}
