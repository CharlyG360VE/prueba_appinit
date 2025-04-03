import { Action, createReducer, on } from "@ngrx/store";
import * as action from "../actions/user.actions";
import { IUserInitialState } from "../interfaces/user-state.interface";

const initialState: IUserInitialState = {
  loggedUser: null
};

const _userReducer = createReducer<IUserInitialState, Action>(
  initialState,
  on(action.loginUser, (state, { user: loggedUser }) => (
    {
      ...state,
      loggedUser
    }
  )),
  on(action.logoutUser, state => (
    {
      ...state,
      loggedUser: null
    }
  ))
);

export const userReducer = (state: IUserInitialState | undefined, action: Action) => _userReducer(state, action);