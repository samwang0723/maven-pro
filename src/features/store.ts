import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './slices/authSlice';
import { jarvisApi } from './apis/jarvisApi';
import { finmindApi } from './apis/finMindApi';
import { misApi } from './apis/misApi';

const store = configureStore({
  reducer: {
    auth: authSlice,
    [jarvisApi.reducerPath]: jarvisApi.reducer,
    [finmindApi.reducerPath]: finmindApi.reducer,
    [misApi.reducerPath]: misApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      jarvisApi.middleware,
      finmindApi.middleware,
      misApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
