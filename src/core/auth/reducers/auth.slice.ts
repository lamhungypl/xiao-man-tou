import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerLoginFail, CustomerLoginSuccess } from 'src/@types/reponse/auth';
import { login as customerLogin } from '../effects/auth.effects';
import { initialState as authInitState } from './auth.reducers';
import { AuthState } from './auth.state';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,

  reducers: {
    loginTest(state) {
      console.log({ state });
      state = state;
    },
    loginSuccess(state) {
      state = state;
    },
    loginFail(state) {
      state = state;
    },
  },
  extraReducers: builder => {
    builder.addCase(customerLogin.pending, (state, action) => {
      // debugger;
      state.loginLoading = true;
    });
    builder.addCase(customerLogin.fulfilled, (state, action: PayloadAction<CustomerLoginSuccess | undefined>) => {
      state.token = action.payload?.data.token;
      state.loginLoading = false;

      // state.token = action.payload.
    });
    builder.addCase(customerLogin.rejected, (state, action: PayloadAction<CustomerLoginFail | undefined>) => {
      // state = state;
      // console.log(action);
      state.loginLoading = false;
    });
  },
});
export const { loginTest } = authSlice.actions;
export default authSlice.reducer;
