import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokemon/:id',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/pokemon-details/pokemon-details.module').then((m) => m.PokemonDetailsModule),
  },
  {
    path: 'about',
    component: LayoutComponent,
    loadChildren: () => import('./views/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'error',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/internal-server-error/internal-server-error.module').then(
        (m) => m.InternalServerErrorModule
      ),
  },
  {
    path: '**',
    component: LayoutComponent,
    loadChildren: () => import('./views/not-found/not-found.module').then((m) => m.NotFoundModule),
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
