import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  let peticiones = 0;

  spinner.show();
  peticiones++;

  return next(req)
    .pipe(
      finalize(() => {
        peticiones--

        if (peticiones === 0) spinner.hide();
      })
    );
};
