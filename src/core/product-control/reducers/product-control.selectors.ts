import { createSelector } from 'reselect';

import * as productControlReducers from './product-control.reducers';
import { AppState } from '../../appState';

export const getState = (State: AppState) => State.productControl;
export const getCartList = createSelector(getState, productControlReducers.getCartList);
export const getCartListCount = createSelector(getState, productControlReducers.getCartListCount);
export const getTotalCartPrice = createSelector(getState, productControlReducers.getTotalCartPrice);
export const getCheckedOutData = createSelector(getState, productControlReducers.getCheckedOut);

export const getCheckoutLoading = createSelector(getState, productControlReducers.getCheckoutLoading);

export const getOptionsAvailable = createSelector(getState, productControlReducers.getOptionsAvailable);
