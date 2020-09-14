import { Map, Record } from 'immutable';

export interface WishlistState extends Map<string, any> {
  newPassword: any;
  wishlist: any;
  wishlistLoading: any;
}

export const wishlistRecord = Record({
  newPassword: {},
  wishlist: [],
  wishlistLoading: false,
});
