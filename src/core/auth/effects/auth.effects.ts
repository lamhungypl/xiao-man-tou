import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomerLoginFail } from 'src/@types/reponse/auth';
import { CustomerLogin } from 'src/@types/request/auth';
import { RootState } from 'src/core/appReducer';
import { AppDispatch } from 'src/core/appStore';
import { customerLogin } from '../auth.service';

import { AxiosError } from 'axios';

export const login = createAsyncThunk<
  any,
  CustomerLogin,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: CustomerLoginFail;
  }
>('customer-login', async (params, { rejectWithValue }) => {
  try {
    const response = await customerLogin(params);
    return response.data as CustomerLogin;
  } catch (error) {
    const err: AxiosError<CustomerLoginFail> = error;
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});
