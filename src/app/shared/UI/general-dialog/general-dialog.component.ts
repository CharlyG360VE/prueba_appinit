import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IGeneralDialogData } from '@core/interfaces/dialog.interface';
import { AlertTypeEnum } from '../../../core/enums/general-dialog.enum';

@Component({
  selector: 'app-general-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './general-dialog.component.html',
  styleUrl: './general-dialog.component.scss'
})
export class GeneralDialogComponent {

  public alertType = AlertTypeEnum;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IGeneralDialogData) {}

}
