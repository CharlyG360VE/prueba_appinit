import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'appinit-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './appinit-card.component.html',
  styleUrl: './appinit-card.component.scss',
})
export class AppinitCardComponent {

  @Input() title = '';
  @Input() subtitle = '';

}
