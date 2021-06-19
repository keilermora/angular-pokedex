import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, SidenavComponent, PokemonListComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
