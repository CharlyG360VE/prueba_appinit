import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { AppinitCardComponent } from "@core/shared/UI/appinit-card/appinit-card.component";
import { AppinitTitleComponent } from "@core/shared/UI/appinit-title/appinit-title.component";

export const POKEMON_DETAIL_IMPORTS = [
  CommonModule,
  MatButtonModule,
  MatChipsModule,
  AppinitCardComponent,
  AppinitTitleComponent
];
