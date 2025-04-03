import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AppinitCardComponent } from '@core/shared/UI/appinit-card/appinit-card.component';
import { IPokemonDetail } from '@modules/pokemons/interfaces/pokemons.interface';
import { PokemonsService } from '@modules/pokemons/services/pokemons.service';
import { MatChipsModule } from '@angular/material/chips';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    AppinitCardComponent
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export default class PokemonDetailComponent {

  @Input() name = '';

  private readonly _pokemonSvc = inject(PokemonsService);
  private readonly _subscription = new Subscription();
  private readonly _router = inject(Router);

  public readonly pokemonDetail = signal<IPokemonDetail | null>(null);

  ngOnInit() {
    this.getPokemonDetail();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  public return() {
    this._router.navigate(['/privado/pokemons']);
  }

  private getPokemonDetail() {
    this._subscription.add(
      this._pokemonSvc.getPokemonDetailByName(this.name)
        .subscribe(
          {
            next: response => {
              console.log(response)
              this.pokemonDetail.set(response)
            }
          }
        )
    );
  }

}
