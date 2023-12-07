import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jarvisApi } from '../../core/api';
import { JarvisV1LoginRequest } from '../../modules/jarvis-api';

const initialState = {
  loading: false,
  accessToken: null,
  error: '',
};

interface LoginParams {
  email: string;
  password: string;
}

export const performLogin = createAsyncThunk(
  'auth/login',
  (params: LoginParams) => {
    const request: JarvisV1LoginRequest = {
      body: params,
    };
    console.log('request', request);
    return jarvisApi.jarvisV1Login(request).then((res) => res.accessToken);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(performLogin.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(performLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload;
      state.error = '';
      return state;
    });
    builder.addCase(performLogin.rejected, (state) => {
      state.loading = false;
      state.accessToken = null;
      state.error = 'Login failed';
      return state;
    });
  },
});

export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
