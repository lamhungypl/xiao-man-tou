import { ActionTypes, Action } from '../actions/account.actions';
import { AccountState, accountRecord } from './account.state';
// import { OrderHistoryModel } from '../models/orderHistory.model';
// import { AddressListResponse } from '../models/addressListResponse.model';

export const initialState: AccountState = (new accountRecord() as unknown) as AccountState;

export const getNewPassword = (state: AccountState) => state.newPassword;
export const getOrderHistoryList = (state: AccountState) => state.orderHistory;
export const getOrderHistoryCount = (state: AccountState) => state.orderHistoryCount;

export const getOrderHistoryDetail = (state: AccountState) => state.orderHistoryDetail;
export const getOrderHistoryDetailLoading = (state: AccountState) => state.orderHistoryDetailLoading;

export const getHistoryListLoading = (state: AccountState) => state.historyListLoading;

export const getChangePasswordLoading = (state: AccountState) => state.changePasswordLoading;

export const getEditedStatus = (state: AccountState) => state.edited;
export const getEditProfileLoading = (state: AccountState) => state.editProfileLoading;

export const getCustomerAddressList = (state: AccountState) => state.addressList;
export const getCustomerAddressListLoading = (state: AccountState) => state.addressListLoading;

export const addCustomerAddress = (state: AccountState) => state.addAddress;
export const addCustomerAddressLoading = (state: AccountState) => state.addAddressLoading;

export const updateCustomerAddress = (state: AccountState) => state.updateCustomerAddress;
export const updateCustomerAddressLoading = (state: AccountState) => state.updateCustomerAddressLoading;

export const deleteCustomerAddress = (state: AccountState) => state.deleteCustomerAddress;
export const deleteCustomerAddressLoading = (state: AccountState) => state.deleteCustomerAddressLoading;

export const getReview = (state: AccountState) => state.review;
export const getReviewLoading = (state: AccountState) => state.reviewLoading;

export const getRating = (state: AccountState) => state.rating;
export const getRatingLoading = (state: AccountState) => state.ratingLoading;

export function reducer(state = initialState, action: Action): AccountState {
  switch (action.type) {
    case ActionTypes.DO_CHANGE_PASSWORD: {
      return {
        ...state,
        changePasswordLoading: true,
      };
    }

    case ActionTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        changePasswordLoading: false,
      };
    }
    case ActionTypes.CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        changePasswordLoading: false,
      };
    }

    case ActionTypes.EDIT_PROFILE: {
      return {
        ...state,
        editProfileLoading: true,
      };
    }

    case ActionTypes.EDIT_PROFILE_SUCCESS: {
      return {
        ...state,

        edited: action.payload,
        editProfileLoading: false,
      };
    }
    case ActionTypes.EDIT_PROFILE_FAIL: {
      return {
        ...state,
        editProfileLoading: false,
      };
    }
    case ActionTypes.GET_ORDER_HISTORY: {
      return {
        ...state,
        historyListLoading: true,
      };
    }

    case ActionTypes.GET_ORDER_HISTORY_SUCCESS: {
      return { ...state, orderHistory: action.payload.data, historyListLoading: false };
    }
    case ActionTypes.GET_ORDER_HISTORY_SUCCESS_COUNT: {
      return { ...state, orderHistoryCount: action.payload.data, historyListLoading: false };
    }
    case ActionTypes.GET_ORDER_HISTORY_FAIL: {
      return { ...state, historyListLoading: false };
    }
    case ActionTypes.GET_ORDER_DETAIL: {
      return { ...state, orderHistoryDetailLoading: true };
    }
    case ActionTypes.CLEAR_ORDER_DETAIL: {
      return { ...state, orderHistoryDetail: {} };
    }

    case ActionTypes.GET_ORDER_DETAIL_SUCCESS: {
      return { ...state, orderHistoryDetail: action.payload.data, orderHistoryDetailLoading: false };
    }
    case ActionTypes.GET_ORDER_DETAIL_FAIL: {
      return { ...state, orderHistoryDetail: {}, orderHistoryDetailLoading: false };
    }
    case ActionTypes.GET_CUSTOMER_ADDRESS_LIST: {
      return { ...state, addressListLoading: true };
    }

    case ActionTypes.GET_CUSTOMER_ADDRESS_LIST_SUCCESS: {
      return { ...state, addressList: action.payload.data, addressListLoading: false };
    }
    case ActionTypes.GET_CUSTOMER_ADDRESS_LIST_FAIL: {
      return { ...state, addressList: [], addAddressLoading: false };
    }

    case ActionTypes.ADD_CUSTOMER_ADDRESS: {
      return {
        ...state,
        addAddressLoading: true,
      };
    }

    case ActionTypes.ADD_CUSTOMER_ADDRESS_SUCCESS: {
      return state;
    }
    case ActionTypes.ADD_CUSTOMER_ADDRESS_FAIL: {
      return state;
    }

    case ActionTypes.UPDATE_CUSTOMER_ADDRESS: {
      return state;
    }

    case ActionTypes.UPDATE_CUSTOMER_ADDRESS_SUCCESS: {
      return state;
    }
    case ActionTypes.UPDATE_CUSTOMER_ADDRESS_FAIL: {
      return state;
    }

    case ActionTypes.DELETE_CUSTOMER_ADDRESS: {
      return state;
    }

    case ActionTypes.DELETE_CUSTOMER_ADDRESS_SUCCESS: {
      return state;
    }
    case ActionTypes.DELETE_CUSTOMER_ADDRESS_FAIL: {
      return state;
    }
    // add review
    // case ActionTypes.GET_REVIEW_DETAIL: {
    //   return state;
    // }

    // case ActionTypes.GET_REVIEW_DETAIL_SUCCESS: {
    //   return state;
    // }
    // case ActionTypes.GET_REVIEW_DETAIL_FAIL: {
    //   return state;
    // }
    // // add rating
    // case ActionTypes.GET_RATING_DETAIL: {
    //   return state;
    // }

    // case ActionTypes.GET_RATING_DETAIL_SUCCESS: {
    //   return state;
    // }

    default: {
      return state;
    }
  }
}
