import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon-layout',
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `
})
export default class PokemonLayoutComponent {

}
