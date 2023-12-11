import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { selectAuth } from '../slices/authSlice';

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseSplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://daily.jarvis-stock.tw/',
    prepareHeaders: (headers, { getState }) => {
      const auth = selectAuth(getState() as RootState);
      if (auth.token) {
        headers.set('authorization', `Bearer ${auth.token}`)
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
