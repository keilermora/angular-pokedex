import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'pokemon/:id',
    loadChildren: () => import('@modules/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsModule),
  },
  {
    path: '**',
    loadChildren: () => import('@modules/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
