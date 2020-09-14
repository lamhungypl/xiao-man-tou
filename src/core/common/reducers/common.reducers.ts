import { ActionTypes, Action } from '../actions/common.actions';
import { CommonState, CommonRecord } from './common.state';
import { ProfileModel } from '../models/profile.model';

export const initialState: CommonState = (new CommonRecord() as unknown) as CommonState;

export function reducer(state = initialState, action: Action): CommonState {
  switch (action.type) {
    case ActionTypes.GET_WISHLIST_COUNT: {
      return state;
    }

    case ActionTypes.GET_WISHLIST_COUNT_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_WISHLIST_COUNT_FAIL: {
      return state;
    }
    case ActionTypes.GET_PROFILE: {
      return state;
    }

    case ActionTypes.GET_PROFILE_SUCCESS: {
      // localStorage.setItem('user', JSON.stringify(payload.data));
      // const tempProfile = new ProfileModel(payload.data);

      return state;
    }
    case ActionTypes.GET_PROFILE_FAIL: {
      return state;
    }
    case ActionTypes.SIGN_OUT: {
      return state;
    }
    case ActionTypes.GET_LANGUAGE_LIST: {
      return state;
    }

    case ActionTypes.GET_LANGUAGE_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_LANGUAGE_LIST_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getWishlistCount = (state: CommonState) => state.wishlistCount;
export const getProfile = (state: CommonState) => state.profile;
export const getLanguages = (state: CommonState) => state.languageList;

export const getWishlistCountLoading = (state: CommonState) => state.wishlistCountLoading;

export const getProfileLoading = (state: CommonState) => state.getProfileLoading;

export const getLanguageLoading = (state: CommonState) => state.getLanguageLoading;
