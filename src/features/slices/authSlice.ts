import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJarvisApi, updateJarvisApiConfig } from '../../core/api';
import { JarvisV1LoginRequest, V1LoginResponse } from '../../modules/jarvis-api';

const initialState = {
  loading: false,
  accessToken: null,
  error: '',
};

interface LoginParams {
  email: string;
  password: string;
}

export const authLogin = createAsyncThunk(
  'auth/login',
  (params: LoginParams) => {
    const request: JarvisV1LoginRequest = {
      body: params,
    };
    const jarvisApi = getJarvisApi();
    return jarvisApi.jarvisV1Login(request).then((res: V1LoginResponse) => res.accessToken);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload;
      state.error = '';
      updateJarvisApiConfig(action.payload);
      return state;
    });
    builder.addCase(authLogin.rejected, (state) => {
      state.loading = false;
      state.accessToken = null;
      state.error = 'Login failed';
      return state;
    });
  },
});

export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
