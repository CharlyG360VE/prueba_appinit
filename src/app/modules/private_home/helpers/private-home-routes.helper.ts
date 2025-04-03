import { Routes } from '@angular/router';
import { eAppRoutes } from '@core/enums/app-routes.enum';

export const PRIVATE_HOME_ROUTES: Routes = [
  {
    path: eAppRoutes.PRIVATE_HOME,
    loadComponent: (async () => await import('../components/private-home-layout/private-layout.component')),
  }
];