
import { Routes } from '@angular/router';
import { eAppRoutes } from '@core/enums/app-routes.enum';

export const POKEMONS_MANAGEMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: (async () => await import('../components/pokemon-list/pokemon-list.component')),
  },
  {
    path: eAppRoutes.POKEMONS_DETAIL,
    loadComponent: (async () => await import('../components/pokemon-detail/pokemon-detail.component')),
  }
];

export const POKEMONS_ROUTES: Routes = [
  {
    path: eAppRoutes.POKEMONS,
    loadComponent: (async () => await import('../components/pokemon-layout/pokemon-layout.component')),
    children: [
      ...POKEMONS_MANAGEMENT_ROUTES
    ]
  }
];