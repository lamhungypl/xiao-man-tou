import { createSelector } from 'reselect';

import * as wishlistReducers from './wishlist.reducers';
import { AppState } from '../../appState';

export const getState = (state: AppState) => state.wishlist;
export const getWishlist = createSelector(getState, wishlistReducers.getWishlist);
export const wishlistLoading = createSelector(getState, wishlistReducers.getWishlistLoading);
