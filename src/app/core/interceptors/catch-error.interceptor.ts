import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@core/services/dialog.service';
import { catchError, throwError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const dialogSvc = inject(DialogService);

  return next(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        dialogSvc.alertDialog('', 'Ha ocurrido un error, verifique por favor.');
        router.navigate(['/inicio']);

        return throwError(() => err);
      })
    );
};
