import { AccountState } from './account/reducers/account.state';
import { AuthState } from './auth/reducers/auth.state';
import { CommonState } from './common/reducers/common.state';
import { ListsState } from './lists/reducers/lists.state';
import { ProductControlState } from './product-control/reducers/product-control.state';
import { WishlistState } from './wishlist/reducers/wishlist.state';
export interface AppState {
  account: AccountState;
  auth: AuthState;
  common: CommonState;
  lists: ListsState;
  productControl: ProductControlState;
  wishlist: WishlistState;
}
