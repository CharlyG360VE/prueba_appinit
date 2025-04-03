import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMON_LIST_IMPORTS as imports } from '@modules/pokemons/helpers/pokemon-list-imports.helper';
import { IPokemon } from '@modules/pokemons/interfaces/pokemons.interface';
import { PokemonsService } from '@modules/pokemons/services/pokemons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  imports,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export default class PokemonListComponent {

  private readonly _pokemonSvc = inject(PokemonsService);
  private readonly _subscription = new Subscription();
  private readonly _router = inject(Router);
  private readonly _page = signal(0);

  public pokemonList = signal<Array<IPokemon>>([]);

  ngOnInit() {
    this.getPokemonList();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  public next() {
    this._page.update(page => page + 1);

    this.getPokemonList();
  }

  public pokemonDetail(name: string) {
    this._router.navigate(['/privado/pokemons/detalle-pokemon', name]);
  }

  private getPokemonList() {
    this._subscription.add(
      this._pokemonSvc.getPokemonList(this._page())
        .subscribe(
          {
            next: response => this.pokemonList.update(pokemons => [...pokemons, ...response.results])
          }
        )
    );
  }

}
