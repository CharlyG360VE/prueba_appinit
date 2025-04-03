import { inject, Injectable } from '@angular/core';
import { IPayloadLogin } from '../interface/user.interface';
import { DataService } from '@core/services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/ngrx/app.reducer';
import { loginUser } from '@core/ngrx/users/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _dataSvc = inject(DataService);
  private readonly _store = inject(Store<AppState>);

  private get users() {
    return this._dataSvc.data?.users;
  }

  constructor() { }

  public login(payload: IPayloadLogin) {
    const USER_FIND = this.users?.find(u => u.email === payload.email && u.password === payload.password)

    if (USER_FIND) {
      this._store.dispatch(loginUser({ user: USER_FIND }));

      return true;
    } else {
      return false;
    }
  }


}
