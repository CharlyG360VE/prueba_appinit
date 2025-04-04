import { Component } from '@angular/core';
import { AppinitTitleComponent } from '@core/shared/UI/appinit-title/appinit-title.component';
import { NavbarComponent } from '@core/shared/UI/navbar/navbar.component';

@Component({
  selector: 'app-home-layout',
  imports: [
    NavbarComponent,
    AppinitTitleComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export default class HomeLayoutComponent {

}
