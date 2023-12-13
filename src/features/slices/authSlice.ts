import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      Cookies.set('token', state.token, { expires: 5 });
    },
    deleteToken(state) {
      state.token = null;
      Cookies.remove('token');
    },
  },
});

export const { setToken, deleteToken } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
