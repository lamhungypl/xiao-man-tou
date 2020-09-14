import { createSelector } from 'reselect';

import * as commonReducers from './common.reducers';
import { AppState } from '../../appState';

export const getState = (State: AppState) => State.common;
export const wishlistCount = createSelector(getState, commonReducers.getWishlistCount);
export const getProfile = createSelector(getState, commonReducers.getProfile);
export const getLanguage = createSelector(getState, commonReducers.getLanguages);

export const wishlistCountLoading = createSelector(getState, commonReducers.getWishlistCountLoading);

export const profileLoading = createSelector(getState, commonReducers.getProfileLoading);

export const languageLoading = createSelector(getState, commonReducers.getLanguageLoading);
