import { Component } from '@angular/core';
import { NavbarComponent } from '@core/shared/UI/navbar/navbar.component';

@Component({
  selector: 'app-home-layout',
  imports: [
    NavbarComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export default class HomeLayoutComponent {

}
