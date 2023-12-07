import { V1ListPickedStocksResponse } from '@/modules/jarvis-api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJarvisApi } from '../../core/api';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const fetchPickedStocks = createAsyncThunk('stock/selfPicked', () => {
  const jarvisApi = getJarvisApi();
  return jarvisApi
    .jarvisV1ListPickedStocks()
    .then((res: V1ListPickedStocksResponse) => res.entries);
});

const selfPickedSlice = createSlice({
  name: 'selfPicked',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPickedStocks.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(fetchPickedStocks.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.data = action.payload;
      state.error = '';
      return state;
    });
    builder.addCase(fetchPickedStocks.rejected, (state) => {
      state.loading = false;
      state.data = [];
      state.error = 'Fetch self picked stocks failed';
      return state;
    });
  },
});

export const selectSelfPicked = (state) => state.selfPicked;
export default selfPickedSlice.reducer;
