import { eRole } from "@core/enums/role.enum";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: eRole;
}

export interface IUserInitialState {
  loggedUser: IUser | null;
}