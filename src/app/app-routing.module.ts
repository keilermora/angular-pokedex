import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokemon/:id',
    component: LayoutComponent,
    loadChildren: () =>
      import('@modules/pokemon-details/pokemon-details.module').then((m) => m.PokemonDetailsModule),
  },
  {
    path: 'acerca-de',
    component: LayoutComponent,
    loadChildren: () => import('@modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'error',
    component: LayoutComponent,
    loadChildren: () =>
      import('@modules/internal-server-error/internal-server-error.module').then(
        (m) => m.InternalServerErrorModule
      ),
  },
  {
    path: '**',
    component: LayoutComponent,
    loadChildren: () => import('@modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

const config: ExtraOptions = {
  scrollOffset: [0, 50],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
