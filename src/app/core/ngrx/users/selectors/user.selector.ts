import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserInitialState } from "../interfaces/user-state.interface";

export const userState = createFeatureSelector<IUserInitialState>('user');

export const getLoggedUser = createSelector(
  userState,
  (state: IUserInitialState) => state.loggedUser
);

export const getFullname = createSelector(
  userState,
  (state: IUserInitialState) => `${state.loggedUser?.firstName ?? ''} ${state.loggedUser?.lastName ?? ''}`
);
