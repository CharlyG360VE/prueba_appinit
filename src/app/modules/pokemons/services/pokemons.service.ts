import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IPokemonDetail, IPokemonDetailResponse, IPokemonListResponse } from '../interfaces/pokemons.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly _pokemonUrlApi = `${environment.urlApi}/pokemon`;
  private readonly _httpClient = inject(HttpClient);

  public getPokemonList(page = 0) {
    return this._httpClient.get<IPokemonListResponse>(`${this._pokemonUrlApi}?limit=10&offset=${page * 10}`);
  }

  public getPokemonDetailByName(name: string) {
    return this._httpClient.get<IPokemonDetailResponse>(`${this._pokemonUrlApi}/${name}`)
      .pipe(
        map(pokemon => this.pokemonDetailMapper(pokemon))
      );
  }

  private pokemonDetailMapper(pokemon: IPokemonDetailResponse): IPokemonDetail {
    return {
      abilities: pokemon.abilities.map(({ ability }) => ability.name),
      moves: pokemon.moves.map(({ move }) => move.name).slice(0, 30),
      pictures: Object.values(pokemon.sprites).filter(picture => picture !== null && typeof picture === 'string'),
      types: pokemon.types.map(type => type.type.name),
      stats: pokemon.stats.map(stat => (
        {
          name: stat.stat.name,
          stat: stat.base_stat
        }
      ))
    }
  }

}
