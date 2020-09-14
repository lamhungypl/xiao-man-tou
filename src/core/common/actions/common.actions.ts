import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_PROFILE = '[login] get profile',
  GET_PROFILE_SUCCESS = '[login] get profile success',
  GET_PROFILE_FAIL = '[login] get profile fail',

  GET_WISHLIST_COUNT = '[count] get wishlist count',
  GET_WISHLIST_COUNT_SUCCESS = '[count] wishlist count success',
  GET_WISHLIST_COUNT_FAIL = '[count] wishlist count fail',
  SIGN_OUT = '[sign out] sign out',

  GET_LANGUAGE_LIST = '[language] get language',
  GET_LANGUAGE_LIST_SUCCESS = '[language] get language success',
  GET_LANGUAGE_LIST_FAIL = '[language] get language fail',
}

export type Action =
  /* get wishlist count action*/
  /* get profile action*/
  /* do sign out action*/
  /* get language action*/
  | { type: ActionTypes.GET_PROFILE; payload: any }
  | { type: ActionTypes.GET_PROFILE_SUCCESS; payload: any }
  | { type: ActionTypes.GET_PROFILE_FAIL; payload: any }
  | { type: ActionTypes.GET_WISHLIST_COUNT; payload: any }
  | { type: ActionTypes.GET_WISHLIST_COUNT_SUCCESS; payload: any }
  | { type: ActionTypes.GET_WISHLIST_COUNT_FAIL; payload: any }
  | { type: ActionTypes.GET_LANGUAGE_LIST; payload?: any }
  | { type: ActionTypes.GET_LANGUAGE_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_LANGUAGE_LIST_FAIL; payload?: any }
  | { type: ActionTypes.SIGN_OUT; payload?: any };
