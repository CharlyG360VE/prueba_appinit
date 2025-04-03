import { createAction, props } from "@ngrx/store";
import { IUser } from "../interfaces/user-state.interface";

const ACTION_NAME = '[USER REDUCER]';

export const loginUser = createAction(`${ACTION_NAME} login user`, props<{ user: IUser }>());
export const logoutUser = createAction(`${ACTION_NAME} logout user`);
