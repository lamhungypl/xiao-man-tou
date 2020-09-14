import { createSelector } from 'reselect';

import * as authReducers from './auth.reducers';
import { AppState } from '../../appState';

export const getState = (state: AppState) => state.auth;
export const getToken = createSelector(getState, authReducers.getToken);

export const get_loginLoading = createSelector(getState, authReducers.getLoginLoading);

export const get_registerLoading = createSelector(getState, authReducers.getRegisterLoading);

export const get_recoverLoading = createSelector(getState, authReducers.getRecoverLoading);
