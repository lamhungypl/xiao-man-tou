import { Actions, ActionTypes } from '../actions/product-control.actions';
import { productControlRecord, ProductControlState } from './product-control.state';
// import { cloneDeep } from 'lodash-es';

export const initialState: ProductControlState = (new productControlRecord() as unknown) as ProductControlState;

export function reducer(state = initialState, action: Actions): ProductControlState {
  switch (action.type) {
    case ActionTypes.ADD_TO_WISHLIST: {
      return state;
    }

    case ActionTypes.ADD_TO_WISHLIST_SUCCESS: {
      return state;
    }
    case ActionTypes.ADD_TO_WISHLIST_FAIL: {
      return state;
    }
    case ActionTypes.CART_HANDLE_ACTION: {
      return state;
    }

    // productOptions (filter the selected available option from total available options)optionsSelected
    case ActionTypes.CHECKOUT: {
      return state;
    }
    case ActionTypes.CHECKOUT_SUCCESS: {
      return state;
    }
    case ActionTypes.CHECKOUT_FAIL: {
      return state;
    }
    // selected options
    case ActionTypes.SELECTED_OPTIONS: {
      return state;
    }
    // available options
    case ActionTypes.AVAILABLE_OPTIONS: {
      return state;
    }

    case ActionTypes.AVAILABLE_OPTIONS_SUCCESS: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getCartList = (state: ProductControlState) => state.cartList;
export const getCartListCount = (state: ProductControlState) => state.cartCount;
export const getTotalCartPrice = (state: ProductControlState) => state.totalCartPrice;
export const getCheckedOut = (state: ProductControlState) => state.checkedOut;

export const getCheckoutLoading = (state: ProductControlState) => state.checkoutLoading;

export const getOptionsAvailable = (state: ProductControlState) => state.optionsAvailable;
