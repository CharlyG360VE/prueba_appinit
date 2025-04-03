import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'appinit-main',
  imports: [
    NgxSpinnerModule,
    RouterOutlet
  ],
  template: `
    <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "default" color = "#d7e3ff" type = "square-jelly-box" [fullScreen] = "true"><p style="color: white" > Espere por favor... </p></ngx-spinner>
    <router-outlet />
  `
})
export class MainComponent {
}
