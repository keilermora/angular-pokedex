import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailsComponent
  }
];

@NgModule({
  declarations: [
    PokemonDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PokemonDetailsModule { }