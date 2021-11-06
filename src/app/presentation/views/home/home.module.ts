import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/presentation/shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, SidenavComponent, PokemonListComponent, HomeHeaderComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
