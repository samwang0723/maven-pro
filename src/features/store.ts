import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import authReducer from './slices/authSlice';
import selfPickedReducer from './slices/selfPickedSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    selfPicked: selfPickedReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export { store };
