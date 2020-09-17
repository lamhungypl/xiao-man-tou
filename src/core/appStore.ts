import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { rootReducer } from './appReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
