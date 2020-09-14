import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  token: any;
  loginLoading: boolean;

  registerLoading: boolean;

  recoverLoading: boolean;
}

export const authRecord = Record({
  token: '',
  loginLoading: false,

  registerLoading: false,

  recoverLoading: false,
});
