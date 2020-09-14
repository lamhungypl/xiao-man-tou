import { ActionTypes, Actions } from '../actions/wishlist.actions';

import { WishlistState, wishlistRecord } from './wishlist.state';

export const initialState: WishlistState = (new wishlistRecord() as unknown) as WishlistState;

export function reducer(state = initialState, action: Actions): WishlistState {
  switch (action.type) {
    case ActionTypes.GET_WISHLIST: {
      return state;
    }

    case ActionTypes.GET_WISHLIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_WISHLIST_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getWishlist = (state: WishlistState) => state.wishlist;
export const getWishlistLoading = (state: WishlistState) => state.wishlistLoading;
