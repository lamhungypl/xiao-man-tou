import { Map, Record } from 'immutable';

export interface ProductControlState extends Map<string, any> {
  wishlist: any;
  cartList: any;
  selectedOptions: any;
  optionsAvailable: any;
  cartCount: any;
  totalCartPrice: any;
  checkedOut: any;
  checkoutLoading: any;
}

export const productControlRecord = Record({
  wishlist: [],
  cartList: [],
  cartCount: [],
  totalCartPrice: [],
  checkedOut: [],
  optionsAvailable: {},
  selectedOptions: [],

  checkoutLoading: false,
});
