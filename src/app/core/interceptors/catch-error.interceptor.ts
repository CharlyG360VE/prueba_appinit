import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertTypeEnum } from '@core/enums/general-dialog.enum';
import { DialogService } from '@core/services/dialog.service';
import { catchError, throwError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const dialogSvc = inject(DialogService);
  const defaultDialogOptions = {...dialogSvc.defaultOptions};

  defaultDialogOptions.alertType = AlertTypeEnum.ERROR;
  defaultDialogOptions.textSecondary = 'Ha ocurrido un error, verifique por favor.';

  return next(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        dialogSvc.alertDialog(defaultDialogOptions);
        router.navigate(['/inicio']);

        return throwError(() => err);
      })
    );
};
