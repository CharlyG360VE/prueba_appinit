import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from './users/reducer/user.reducer';
import { IUserInitialState } from "./users/interfaces/user-state.interface";

export interface AppState {
  user: IUserInitialState;
}

export const APP_REDUCER: ActionReducerMap<AppState> = {
  user: userReducer
};