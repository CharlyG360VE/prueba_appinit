import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AppinitCardComponent } from "@core/shared/UI/appinit-card/appinit-card.component";

export const POKEMON_LIST_IMPORTS = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  AppinitCardComponent
];
