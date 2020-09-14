import { AccountState } from './account/reducers/account.state';
import { AuthState } from './auth/reducers/auth.state';
export interface AppState {
  account: AccountState;
  auth: AuthState;
}
