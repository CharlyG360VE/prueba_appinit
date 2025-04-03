import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { AppinitCardComponent } from "@core/shared/UI/appinit-card/appinit-card.component";

export const LOGIN_IMPORTS = [
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  AppinitCardComponent
];
