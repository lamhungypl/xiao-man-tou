import { ActionTypes, Action } from '../actions/auth.actions';

import { AuthState, authRecord } from './auth.state';

export const initialState: AuthState = (new authRecord() as unknown) as AuthState;

export function reducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      state;
    }

    case ActionTypes.LOGIN_SUCCESS: {
      state;
    }
    case ActionTypes.LOGIN_FAIL: {
      state;
    }

    case ActionTypes.REGISTER: {
      state;
    }

    case ActionTypes.REGISTER_SUCCESS: {
      state;
    }
    case ActionTypes.REGISTER_FAIL: {
      state;
    }

    case ActionTypes.RECOVER: {
      state;
    }

    case ActionTypes.RECOVER_SUCCESS: {
      state;
    }
    case ActionTypes.RECOVER_FAIL: {
      state;
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
