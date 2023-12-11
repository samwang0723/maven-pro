import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import authSlice from './slices/authSlice';
import { jarvisApi } from './apis/jarvisApi';

const store = configureStore({
  reducer: {
    auth: authSlice,
    [jarvisApi.reducerPath]: jarvisApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jarvisApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
