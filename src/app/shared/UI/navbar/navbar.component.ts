import { Component, inject } from '@angular/core';
import { NAVBAR_IMPORTS as imports } from '../helpers/navbar-imports.helper';
import { Router } from '@angular/router';


@Component({
  selector: 'appinit-navbar',
  imports,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private readonly _router = inject(Router);

  public login() {
    this._router.navigate(['/iniciar-sesion']);
  }

}
