import { AccountState } from './account/reducers/account.state';
import { AuthState } from './auth/reducers/auth.state';
import { CommonState } from './common/reducers/common.state';
export interface AppState {
  account: AccountState;
  auth: AuthState;
  common: CommonState;
}
