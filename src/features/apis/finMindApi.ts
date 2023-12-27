import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a type for the stock price data
interface StockPriceData {
  date: string;
  stock_id: string;
  Trading_Volume: number;
  Trading_money: number;
  open: number;
  max: number;
  min: number;
  close: number;
  spread: number;
  Trading_turnover: number;
  Volume: number;
  Open: number;
  High: number;
  Low: number;
  Close: number;
}

// Define a type for the API response
interface StockApiResponse {
  msg: string;
  status: number;
  data: StockPriceData[];
}

// Define the API service
export const finmindApi = createApi({
  reducerPath: 'finmindApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.finmindtrade.com/' }),
  endpoints: (builder) => ({
    getStockPrice: builder.query<
      StockPriceData[],
      {
        dataset: string;
        data_id: string;
        start_date: string;
        end_date: string;
        token: string;
      }
    >({
      query: ({ dataset, data_id, start_date, end_date, token }) => ({
        url: `api/v4/data`,
        params: {
          dataset,
          data_id,
          start_date,
          end_date,
          token,
        },
      }),
      transformResponse: (response: StockApiResponse) => response.data,
    }),
    // You can add more endpoints here if needed
  }),
});

// Export hooks for usage in functional components
export const { useGetStockPriceQuery } = finmindApi;
