import { CheckoutModel } from '../models/checkout.model';

export enum ActionTypes {
  ADD_TO_WISHLIST = '[wishlist] add to wishlist',
  ADD_TO_WISHLIST_SUCCESS = '[wishlist] add to wishlist success',
  ADD_TO_WISHLIST_FAIL = '[wishlist] add to wishlist fail',

  CART_HANDLE_ACTION = '[cart] cart handle',

  CHECKOUT = '[checkout] do checkout ',
  CHECKOUT_SUCCESS = '[checkout] do checkout success',
  CHECKOUT_FAIL = '[checkout] do checkout fail',

  SELECTED_OPTIONS = '[checkout] do selected options ',
  SELECTED_OPTIONS_SUCCESS = '[checkout] do selected options success',
  SELECTED_OPTIONS_FAIL = '[checkout] do selected options fail',

  AVAILABLE_OPTIONS = '[checkout] do available options ',
  AVAILABLE_OPTIONS_SUCCESS = '[checkout] do available options success ',
  AVAILABLE_OPTIONS_FAIL = '[checkout] do available options fail ',
}
/* add to wishlist action*/

/* cart handle action*/

/*available options */

/*selected options */

/* product checkout action*/
export type Actions =
  | { type: ActionTypes.ADD_TO_WISHLIST; payload: any }
  | { type: ActionTypes.ADD_TO_WISHLIST_SUCCESS; payload: any }
  | { type: ActionTypes.ADD_TO_WISHLIST_FAIL; payload: any }
  | { type: ActionTypes.CART_HANDLE_ACTION; payload: any }
  | { type: ActionTypes.CHECKOUT; payload: any }
  | { type: ActionTypes.CHECKOUT_SUCCESS; payload: any }
  | { type: ActionTypes.CHECKOUT_FAIL; payload?: any }
  | { type: ActionTypes.SELECTED_OPTIONS; payload?: any }
  | { type: ActionTypes.SELECTED_OPTIONS_SUCCESS; payload?: any }
  | { type: ActionTypes.SELECTED_OPTIONS_FAIL; payload?: any }
  | { type: ActionTypes.AVAILABLE_OPTIONS; payload?: any }
  | { type: ActionTypes.AVAILABLE_OPTIONS_SUCCESS; payload?: any }
  | { type: ActionTypes.AVAILABLE_OPTIONS_FAIL; payload?: any };
