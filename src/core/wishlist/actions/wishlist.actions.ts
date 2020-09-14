export enum ActionTypes {
  GET_WISHLIST = '[wishlist] get wishlist',
  GET_WISHLIST_SUCCESS = '[wishlist] get wishlist success',
  GET_WISHLIST_FAIL = '[wishlist] get wishlist fail',
  DELETE_PRODUCT = '[wishlist] delete product',
  DELETE_PRODUCT_SUCCESS = '[wishlist] delete product success',
  DELETE_PRODUCT_FAIL = '[wishlist] delete product fail',
}
/* get wish list action*/

/* delete product from wish list action*/

export type Actions =
  | { type: ActionTypes.GET_WISHLIST; payload: any }
  | { type: ActionTypes.GET_WISHLIST_SUCCESS; payload: any }
  | { type: ActionTypes.GET_WISHLIST_FAIL; payload: any }
  | { type: ActionTypes.DELETE_PRODUCT; payload: any }
  | { type: ActionTypes.DELETE_PRODUCT_SUCCESS; payload: any }
  | { type: ActionTypes.DELETE_PRODUCT_FAIL; payload: any };
