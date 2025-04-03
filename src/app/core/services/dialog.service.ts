import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertTypeEnum } from '@core/enums/general-dialog.enum';
import { IGeneralDialogData } from '@core/interfaces/dialog.interface';
import { GeneralDialogComponent } from '@core/shared/UI/general-dialog/general-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly _dialog = inject(MatDialog);

  public get defaultOptions(): IGeneralDialogData {
    return {
      alertType: AlertTypeEnum.CHECK,
      textPrimary: '',
      textSecondary: '',
      confirmBtn: false,
      textNotConfirmBtn: 'Aceptar',
      textConfirmBtn: 'Si',
      textCancelBtn: 'No',
      closeBtn: false
    };
  }

  public alertDialog(options: IGeneralDialogData) {
    return this._dialog.open(
      GeneralDialogComponent,
      {
        minWidth: '28vw',
        maxHeight: '30vh',
        enterAnimationDuration: 500,
        exitAnimationDuration: 100,
        disableClose: true,
        hasBackdrop: true,
        autoFocus: true,
        data: options
      }
    ).afterClosed() as Observable<boolean>
  }

}
