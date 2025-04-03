import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppState } from '@core/ngrx/app.reducer';
import { getLoggedUser } from '@core/ngrx/users/selectors/user.selector';
import { select, Store } from '@ngrx/store';
import { first, map } from 'rxjs/operators';

export const NO_AUTH_GUARD: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const loggedUser = store.pipe(select(getLoggedUser));
  const router = inject(Router)

  return loggedUser.pipe(
    first(),
    map(loggedUser => {
      if (loggedUser)
        router.navigate(['/privado/inicio-privado']);

      return !loggedUser;
    })
  )
};
