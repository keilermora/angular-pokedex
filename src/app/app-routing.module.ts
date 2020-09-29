import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'pokemon/:id',
    component: MainLayoutComponent,
    loadChildren: () => import('@modules/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsModule),
  },
  {
    path: 'acerca-de',
    component: MainLayoutComponent,
    loadChildren: () => import('@modules/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'error',
    component: MainLayoutComponent,
    loadChildren: () => import('@modules/internal-server-error/internal-server-error.module').then(m => m.InternalServerErrorModule),
  },
  {
    path: '**',
    component: MainLayoutComponent,
    loadChildren: () => import('@modules/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
