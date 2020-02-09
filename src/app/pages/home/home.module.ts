import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    PokemonCardComponent,
    SidenavComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
