import { createSelector } from 'reselect';

import * as accountReducers from './account.reducer';
import { AppState } from '../../appState';

export const getState = (State: AppState) => State.account;

export const getOrderHistoryList = createSelector(getState, accountReducers.getOrderHistoryList);
export const getOrderHistoryCount = createSelector(getState, accountReducers.getOrderHistoryCount);

export const getOrderHistoryDetailLoading = createSelector(getState, accountReducers.getOrderHistoryDetailLoading);

export const getHistoryListLoading = createSelector(getState, accountReducers.getHistoryListLoading);

export const getChangePasswordLoading = createSelector(getState, accountReducers.getChangePasswordLoading);

export const getEditedStatus = createSelector(getState, accountReducers.getEditedStatus);
export const getEditProfileLoading = createSelector(getState, accountReducers.getEditProfileLoading);

export const getAddressList = createSelector(getState, accountReducers.getCustomerAddressList);
export const getAddressListLoading = createSelector(getState, accountReducers.getCustomerAddressListLoading);

export const getAddAddress = createSelector(getState, accountReducers.addCustomerAddress);
export const getAddAddressLoading = createSelector(getState, accountReducers.addCustomerAddressLoading);

export const getUpdateAddress = createSelector(getState, accountReducers.updateCustomerAddress);
export const getUpdateAddressLoading = createSelector(getState, accountReducers.updateCustomerAddressLoading);

export const getDeleteAddress = createSelector(getState, accountReducers.deleteCustomerAddress);
export const getDeleteAddressLoading = createSelector(getState, accountReducers.deleteCustomerAddressLoading);

export const getReview = createSelector(getState, accountReducers.getReview);
export const getReviewLoading = createSelector(getState, accountReducers.getReviewLoading);

export const getRating = createSelector(getState, accountReducers.getRating);
export const getRatingLoading = createSelector(getState, accountReducers.getRatingLoading);
