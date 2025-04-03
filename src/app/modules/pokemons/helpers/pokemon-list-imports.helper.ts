import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AppinitCardComponent } from "@core/shared/UI/appinit-card/appinit-card.component";

export const POKEMON_LIST_IMPORTS = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  AppinitCardComponent
];
