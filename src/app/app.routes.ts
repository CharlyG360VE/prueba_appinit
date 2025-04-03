import { Routes } from '@angular/router';
import { eAppRoutes } from '@core/enums/app-routes.enum';
import { AUTH_GUARD } from './core/guards/auth.guard';
import { NO_AUTH_GUARD } from './core/guards/no-auth.guard';
import { POKEMONS_ROUTES } from '@modules/pokemons/helpers/pokemons-routes.helper';
import { PRIVATE_HOME_ROUTES } from '@modules/private_home/helpers/private-home-routes.helper';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${eAppRoutes.PRINCIPAL}/${eAppRoutes.PRIVATE_HOME}`
  },
  {
    path: eAppRoutes.HOME,
    loadComponent: (async () => await import('@modules/home/components/home-layout/home-layout.component')),
  },
  {
    path: eAppRoutes.PRINCIPAL,
    loadComponent: (async () => await import('@modules/layout/components/layout/layout.component')),
    canActivate: [AUTH_GUARD],
    children: [
      ...PRIVATE_HOME_ROUTES,
      ...POKEMONS_ROUTES,
    ]
  },
  {
    path: eAppRoutes.LOGIN,
    canActivate: [NO_AUTH_GUARD],
    loadComponent: (async () => await import('@modules/user/components/login/login.component'))
  }
];
