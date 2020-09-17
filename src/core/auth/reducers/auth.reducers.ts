import { ActionTypes, Action } from '../actions/auth.actions';

import { AuthState, authRecord } from './auth.state';

export const initialState: AuthState = {
  token: '',
  loginLoading: false,

  registerLoading: false,

  recoverLoading: false,
};

export function reducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return state;
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return state;
    }
    case ActionTypes.LOGIN_FAIL: {
      return state;
    }

    case ActionTypes.REGISTER: {
      return state;
    }

    case ActionTypes.REGISTER_SUCCESS: {
      return state;
    }
    case ActionTypes.REGISTER_FAIL: {
      return state;
    }

    case ActionTypes.RECOVER: {
      return state;
    }

    case ActionTypes.RECOVER_SUCCESS: {
      return state;
    }
    case ActionTypes.RECOVER_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getToken = (state: AuthState) => state.token;

export const getLoginLoading = (state: AuthState) => state.loginLoading;

export const getRegisterLoading = (state: AuthState) => state.registerLoading;

export const getRecoverLoading = (state: AuthState) => state.recoverLoading;
