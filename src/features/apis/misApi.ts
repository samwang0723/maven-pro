// Import the necessary functions from Redux Toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define TypeScript interfaces for the API response
interface StockInfo {
  tv: string;
  c: string;
  d: string;
  ch: string;
  tlong: string;
  ip: string;
  h: string;
  i: string;
  it: string;
  l: string;
  n: string;
  o: string;
  ex: string;
  t: string;
  v: string;
  y: string;
  z: string;
}

interface TwseApiResponse {
  msgArray: StockInfo[];
  // Include other fields from the response if necessary
}

// Define the base query with the base URL of the API
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://mis.twse.com.tw',
});

// Define the API slice
export const misApi = createApi({
  reducerPath: 'misApi', // Unique key for the reducer
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // Define an endpoint to get stock information
    getIndexPrice: builder.query({
      // Define the query parameter for the endpoint
      query: (ex_ch) =>
        `/stock/api/getStockInfo.jsp?ex_ch=${ex_ch}&json=1&delay=0`,
      // Transform the response to get the msgArray directly
      transformResponse: (response: TwseApiResponse) => response.msgArray,
    }),
  }),
});

// Export the auto-generated hook for the getStockInfo endpoint
export const { useGetIndexPriceQuery } = misApi;
