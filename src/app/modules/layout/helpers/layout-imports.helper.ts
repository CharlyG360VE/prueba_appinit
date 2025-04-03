import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider"
import { MatListModule } from "@angular/material/list"
import { NavbarComponent } from '@core/shared/UI/navbar/navbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';

export const LAYOUT_IMPORTS = [
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatTooltipModule,
  NavbarComponent
];
