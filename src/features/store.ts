import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export { store };
