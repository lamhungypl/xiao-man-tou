import { combineReducers } from '@reduxjs/toolkit';

import { reducer as authReducer } from '../core/auth/reducers/auth.reducers';
import { reducer as accountReducer } from '../core/account/reducers/account.reducer';
import { reducer as productControlReducer } from '../core/product-control/reducers/product-control.reducers';
import { reducer as wishlistReducer } from '../core/wishlist/reducers/wishlist.reducers';
import { reducer as commonReducer } from '../core/common/reducers/common.reducers';
import { reducer as listReducer } from '../core/lists/reducers/lists.reducer';
// import { environment } from '../';

export const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  productControl: productControlReducer,
  wishlist: wishlistReducer,
  common: commonReducer,
  list: listReducer,
});
// appState.ts reference
export type RootState = ReturnType<typeof rootReducer>;
