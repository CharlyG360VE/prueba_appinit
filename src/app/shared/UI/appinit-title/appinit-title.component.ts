import { Component, Input } from '@angular/core';

@Component({
  selector: 'appinit-title',
  imports: [],
  templateUrl: './appinit-title.component.html',
  styleUrl: './appinit-title.component.scss'
})
export class AppinitTitleComponent {

  @Input() title = '';
  @Input() subTitle = '';

}
