
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { eAppRoutes } from '@core/enums/app-routes.enum';
import { AppState } from '@core/ngrx/app.reducer';
import { logoutUser } from '@core/ngrx/users/actions/user.actions';
import { LAYOUT_IMPORTS as imports } from '@modules/layout/helpers/layout-imports.helper';
import { IMenuItem } from '@modules/layout/interfaces/menu.interface';
import { Store } from '@ngrx/store';


@Component({
  selector: 'appinit-layout',
  imports,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

  private readonly _router = inject(Router);
  private readonly _store = inject(Store<AppState>);

  menuItems: IMenuItem[] = [
    {
      icon: 'home',
      label: 'Inicio',
      route: eAppRoutes.PRIVATE_HOME
    },
    {
      icon: 'group',
      label: 'Listado de pokemons',
      route: eAppRoutes.POKEMONS
    }
  ];
  collapsed = signal(true);
  sidenavWidth = computed(() => this.collapsed() ? '5.6em' : '16em');
  profilePicSize = computed(() => this.collapsed() ? '32' : '100');

  get fullname() {
    return '';
  }
  get roleName() {
    return '';
  }

  logout() {
    this._store.dispatch(logoutUser());
    this._router.navigate(['/inicio']);
  }

}
