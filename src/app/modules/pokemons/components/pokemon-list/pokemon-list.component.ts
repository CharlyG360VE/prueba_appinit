import { Component, inject, signal } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { POKEMON_LIST_IMPORTS as imports } from '@modules/pokemons/helpers/pokemon-list-imports.helper';
import { IPokemon } from '@modules/pokemons/interfaces/pokemons.interface';
import { PokemonsService } from '@modules/pokemons/services/pokemons.service';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  imports,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export default class PokemonListComponent {

  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _pokemonSvc = inject(PokemonsService);
  private readonly _subscription = new Subscription();
  private readonly _router = inject(Router);
  private readonly _page = signal(0);

  public pokemonList = signal<Array<IPokemon>>([]);
  public filteredPokemons = signal<Array<IPokemon>>([]);
  public form = this._fb.group<{ search: FormControl<string> }>(
    {
      search: this._fb.control('')
    }
  );

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

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (filterValue.length > 0) {
      const result = this.pokemonList().filter(pokemon => pokemon.name.toLowerCase().includes(filterValue));

      this.filteredPokemons.set(result);
    } else {
      this.filteredPokemons.set(this.pokemonList());
    }
  }

  private getPokemonList() {
    this._subscription.add(
      this._pokemonSvc.getPokemonList(this._page())
        .subscribe(
          {
            next: response => {
              this.getPokemonsDetails(response.results);
            }
          }
        )
    );
  }

  private async getPokemonsDetails(data: IPokemon[]) {
    if (data.length > 0 ) {
      for (const pokemon of data) {
        const pokemonDetail = await this.getPokemonDetail(pokemon.name);

        pokemon.url = pokemonDetail?.pictures.reverse().slice(0, 4) ?? [];
      }

      this.pokemonList.update(pokemons => [...pokemons, ...data]);
      this.filteredPokemons.set(this.pokemonList());
    }
  }

  private async getPokemonDetail(name: string) {
    try {
      return await lastValueFrom(this._pokemonSvc.getPokemonDetailByName(name));
    } catch (error) {
      console.error(error);

      return null;
    }
  }

}
