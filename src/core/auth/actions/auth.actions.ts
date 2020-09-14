import { LoginResponse } from '../models/loginResponse.model';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';

export enum ActionTypes {
  // login actions
  LOGIN = '[login] do login',
  LOGIN_SUCCESS = '[login] do login success',
  LOGIN_FAIL = '[login] do login fail',
  // register actions
  REGISTER = '[login] do register',
  REGISTER_SUCCESS = '[login] do register success',
  REGISTER_FAIL = '[login] do register fail',
  // recover account action
  RECOVER = '[login] do recover',
  RECOVER_SUCCESS = '[login] do recover success',
  RECOVER_FAIL = '[login] do recover fail',
}
// login actions
export type Action =
  | { type: ActionTypes.LOGIN; payload: LoginModel }
  | { type: ActionTypes.LOGIN_SUCCESS; payload: LoginResponse }
  | { type: ActionTypes.LOGIN_FAIL; payload: any }
  | { type: ActionTypes.REGISTER; payload: RegisterModel }
  | { type: ActionTypes.REGISTER_SUCCESS; payload: LoginResponse }
  | { type: ActionTypes.REGISTER_FAIL; payload: any }
  | { type: ActionTypes.RECOVER; payload?: any }
  | { type: ActionTypes.RECOVER_SUCCESS; payload?: LoginResponse }
  | { type: ActionTypes.RECOVER_FAIL; payload?: any };
