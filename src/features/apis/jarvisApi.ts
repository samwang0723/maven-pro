import { baseSplitApi as api } from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    jarvisV1GetBalance: build.query<
      JarvisV1GetBalanceApiResponse,
      JarvisV1GetBalanceApiArg
    >({
      query: () => ({ url: `/v1/balances` }),
    }),
    jarvisV1ListCategories: build.query<
      JarvisV1ListCategoriesApiResponse,
      JarvisV1ListCategoriesApiArg
    >({
      query: () => ({ url: `/v1/categories` }),
    }),
    jarvisV1ListDailyClose: build.mutation<
      JarvisV1ListDailyCloseApiResponse,
      JarvisV1ListDailyCloseApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/dailycloses`,
        method: 'POST',
        body: queryArg.v1ListDailyCloseRequest,
      }),
    }),
    jarvisV1Login: build.mutation<
      JarvisV1LoginApiResponse,
      JarvisV1LoginApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/login`,
        method: 'POST',
        body: queryArg.v1LoginRequest,
      }),
    }),
    jarvisV1Logout: build.mutation<
      JarvisV1LogoutApiResponse,
      JarvisV1LogoutApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/logout`,
        method: 'POST',
        body: queryArg.v1LogoutRequest,
      }),
    }),
    jarvisV1ListOrders: build.mutation<
      JarvisV1ListOrdersApiResponse,
      JarvisV1ListOrdersApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/orders`,
        method: 'POST',
        body: queryArg.v1ListOrderRequest,
      }),
    }),
    jarvisV1CreateOrder: build.mutation<
      JarvisV1CreateOrderApiResponse,
      JarvisV1CreateOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/orders`,
        method: 'PUT',
        body: queryArg.v1CreateOrderRequest,
      }),
    }),
    jarvisV1ListPickedStocks: build.query<
      JarvisV1ListPickedStocksApiResponse,
      JarvisV1ListPickedStocksApiArg
    >({
      query: () => ({ url: `/v1/pickedstocks` }),
    }),
    jarvisV1InsertPickedStocks: build.mutation<
      JarvisV1InsertPickedStocksApiResponse,
      JarvisV1InsertPickedStocksApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/pickedstocks`,
        method: 'POST',
        body: queryArg.v1InsertPickedStocksRequest,
      }),
    }),
    jarvisV1DeletePickedStocks: build.mutation<
      JarvisV1DeletePickedStocksApiResponse,
      JarvisV1DeletePickedStocksApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/pickedstocks/${queryArg.stockId}`,
        method: 'DELETE',
      }),
    }),
    jarvisV1ListSelections: build.mutation<
      JarvisV1ListSelectionsApiResponse,
      JarvisV1ListSelectionsApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/selections`,
        method: 'POST',
        body: queryArg.v1ListSelectionRequest,
      }),
    }),
    jarvisV1GetStakeConcentration: build.mutation<
      JarvisV1GetStakeConcentrationApiResponse,
      JarvisV1GetStakeConcentrationApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/stakeconcentration`,
        method: 'POST',
        body: queryArg.v1GetStakeConcentrationRequest,
      }),
    }),
    jarvisV1ListStocks: build.mutation<
      JarvisV1ListStocksApiResponse,
      JarvisV1ListStocksApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/stocks`,
        method: 'POST',
        body: queryArg.v1ListStockRequest,
      }),
    }),
    jarvisV1ListThreePrimary: build.mutation<
      JarvisV1ListThreePrimaryApiResponse,
      JarvisV1ListThreePrimaryApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/threeprimary`,
        method: 'POST',
        body: queryArg.v1ListThreePrimaryRequest,
      }),
    }),
    jarvisV1CreateTransaction: build.mutation<
      JarvisV1CreateTransactionApiResponse,
      JarvisV1CreateTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/transactions`,
        method: 'POST',
        body: queryArg.v1CreateTransactionRequest,
      }),
    }),
    jarvisV1ListUsers: build.query<
      JarvisV1ListUsersApiResponse,
      JarvisV1ListUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/users`,
        params: { offset: queryArg.offset, limit: queryArg.limit },
      }),
    }),
    jarvisV1CreateUser: build.mutation<
      JarvisV1CreateUserApiResponse,
      JarvisV1CreateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/users`,
        method: 'POST',
        body: queryArg.v1CreateUserRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as jarvisApi };
export type JarvisV1GetBalanceApiResponse =
  /** status 200 A successful response. */ V1GetBalanceResponse;
export type JarvisV1GetBalanceApiArg = void;
export type JarvisV1ListCategoriesApiResponse =
  /** status 200 A successful response. */ V1ListCategoriesResponse;
export type JarvisV1ListCategoriesApiArg = void;
export type JarvisV1ListDailyCloseApiResponse =
  /** status 200 A successful response. */ V1ListDailyCloseResponse;
export type JarvisV1ListDailyCloseApiArg = {
  v1ListDailyCloseRequest: V1ListDailyCloseRequest;
};
export type JarvisV1LoginApiResponse =
  /** status 200 A successful response. */ V1LoginResponse;
export type JarvisV1LoginApiArg = {
  v1LoginRequest: V1LoginRequest;
};
export type JarvisV1LogoutApiResponse =
  /** status 200 A successful response. */ V1LogoutResponse;
export type JarvisV1LogoutApiArg = {
  v1LogoutRequest: V1LogoutRequest;
};
export type JarvisV1ListOrdersApiResponse =
  /** status 200 A successful response. */ V1ListOrderResponse;
export type JarvisV1ListOrdersApiArg = {
  v1ListOrderRequest: V1ListOrderRequest;
};
export type JarvisV1CreateOrderApiResponse =
  /** status 200 A successful response. */ V1CreateOrderResponse;
export type JarvisV1CreateOrderApiArg = {
  v1CreateOrderRequest: V1CreateOrderRequest;
};
export type JarvisV1ListPickedStocksApiResponse =
  /** status 200 A successful response. */ V1ListPickedStocksResponse;
export type JarvisV1ListPickedStocksApiArg = void;
export type JarvisV1InsertPickedStocksApiResponse =
  /** status 200 A successful response. */ V1InsertPickedStocksResponse;
export type JarvisV1InsertPickedStocksApiArg = {
  v1InsertPickedStocksRequest: V1InsertPickedStocksRequest;
};
export type JarvisV1DeletePickedStocksApiResponse =
  /** status 200 A successful response. */ V1DeletePickedStocksResponse;
export type JarvisV1DeletePickedStocksApiArg = {
  stockId: string;
};
export type JarvisV1ListSelectionsApiResponse =
  /** status 200 A successful response. */ V1ListSelectionResponse;
export type JarvisV1ListSelectionsApiArg = {
  v1ListSelectionRequest: V1ListSelectionRequest;
};
export type JarvisV1GetStakeConcentrationApiResponse =
  /** status 200 A successful response. */ V1GetStakeConcentrationResponse;
export type JarvisV1GetStakeConcentrationApiArg = {
  v1GetStakeConcentrationRequest: V1GetStakeConcentrationRequest;
};
export type JarvisV1ListStocksApiResponse =
  /** status 200 A successful response. */ V1ListStockResponse;
export type JarvisV1ListStocksApiArg = {
  v1ListStockRequest: V1ListStockRequest;
};
export type JarvisV1ListThreePrimaryApiResponse =
  /** status 200 A successful response. */ V1ListThreePrimaryResponse;
export type JarvisV1ListThreePrimaryApiArg = {
  v1ListThreePrimaryRequest: V1ListThreePrimaryRequest;
};
export type JarvisV1CreateTransactionApiResponse =
  /** status 200 A successful response. */ V1CreateTransactionResponse;
export type JarvisV1CreateTransactionApiArg = {
  v1CreateTransactionRequest: V1CreateTransactionRequest;
};
export type JarvisV1ListUsersApiResponse =
  /** status 200 A successful response. */ V1ListUsersResponse;
export type JarvisV1ListUsersApiArg = {
  offset?: number;
  limit?: number;
};
export type JarvisV1CreateUserApiResponse =
  /** status 200 A successful response. */ V1CreateUserResponse;
export type JarvisV1CreateUserApiArg = {
  v1CreateUserRequest: V1CreateUserRequest;
};
export type V1Balance = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  balance?: number;
  available?: number;
  pending?: number;
};
export type V1GetBalanceResponse = {
  balance?: V1Balance;
};
export type ProtobufAny = {
  '@type'?: string;
  [key: string]: any;
};
export type RpcStatus = {
  code?: number;
  message?: string;
  details?: ProtobufAny[];
};
export type V1ListCategoriesResponse = {
  entries?: string[];
};
export type V1DailyClose = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  stockID?: string;
  date?: string;
  tradeShares?: string;
  transactions?: string;
  turnover?: string;
  open?: number;
  close?: number;
  high?: number;
  low?: number;
  diff?: number;
};
export type V1ListDailyCloseResponse = {
  offset?: number;
  limit?: number;
  totalCount?: string;
  entries?: V1DailyClose[];
};
export type V1ListDailyCloseSearchParams = {
  stockID?: string;
  start?: string;
  end?: string;
};
export type V1ListDailyCloseRequest = {
  offset?: number;
  limit?: number;
  searchParams?: V1ListDailyCloseSearchParams;
};
export type V1LoginResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
  accessToken?: string;
};
export type V1LoginRequest = {
  email?: string;
  password?: string;
};
export type V1LogoutResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
};
export type V1LogoutRequest = object;
export type V1Order = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  stockID?: string;
  buyPrice?: number;
  sellPrice?: number;
  buyQuantity?: string;
  sellQuantity?: string;
  buyExchangeDate?: string;
  sellExchangeDate?: string;
  profitablePrice?: number;
  profitLoss?: number;
  profitLossPercent?: number;
  stockName?: string;
  currentPrice?: number;
};
export type V1ListOrderResponse = {
  offset?: number;
  limit?: number;
  totalCount?: string;
  entries?: V1Order[];
};
export type V1ListOrderSearchParams = {
  stockIDs?: string[];
  exchangeMonth?: string;
  status?: string;
};
export type V1ListOrderRequest = {
  offset?: number;
  limit?: number;
  searchParams?: V1ListOrderSearchParams;
};
export type V1CreateOrderResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
};
export type V1CreateOrderRequest = {
  orderType?: string;
  stockID?: string;
  tradePrice?: number;
  quantity?: string;
  exchangeDate?: string;
};
export type V1Selection = {
  stockID?: string;
  name?: string;
  category?: string;
  date?: string;
  concentration1?: number;
  concentration5?: number;
  concentration10?: number;
  concentration20?: number;
  concentration60?: number;
  volume?: number;
  foreign?: number;
  trust?: number;
  dealer?: number;
  hedging?: number;
  open?: number;
  close?: number;
  high?: number;
  low?: number;
  diff?: number;
  trust10?: number;
  foreign10?: number;
  quoteChange?: number;
};
export type V1ListPickedStocksResponse = {
  entries?: V1Selection[];
};
export type V1InsertPickedStocksResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
};
export type V1InsertPickedStocksRequest = {
  stockIDs?: string[];
};
export type V1DeletePickedStocksResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
};
export type V1ListSelectionResponse = {
  entries?: V1Selection[];
};
export type V1ListSelectionRequest = {
  date?: string;
  strict?: boolean;
};
export type V1StakeConcentration = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  stockID?: string;
  date?: string;
  sumBuyShares?: string;
  sumSellShares?: string;
  avgBuyPrice?: number;
  avgSellPrice?: number;
  concentration1?: number;
  concentration5?: number;
  concentration10?: number;
  concentration20?: number;
  concentration60?: number;
};
export type V1GetStakeConcentrationResponse = {
  stakeConcentration?: V1StakeConcentration;
};
export type V1GetStakeConcentrationRequest = {
  stockID?: string;
  date?: string;
};
export type V1Stock = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  stockID?: string;
  name?: string;
  country?: string;
  category?: string;
  market?: string;
};
export type V1ListStockResponse = {
  offset?: number;
  limit?: number;
  totalCount?: string;
  entries?: V1Stock[];
};
export type V1ListStockSearchParams = {
  stockIDs?: string[];
  country?: string;
  name?: string;
  category?: string;
};
export type V1ListStockRequest = {
  offset?: number;
  limit?: number;
  searchParams?: V1ListStockSearchParams;
};
export type V1ThreePrimary = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  stockID?: string;
  date?: string;
  foreignTradeShares?: string;
  trustTradeShares?: string;
  dealerTradeShares?: string;
  hedgingTradeShares?: string;
};
export type V1ListThreePrimaryResponse = {
  offset?: number;
  limit?: number;
  totalCount?: string;
  entries?: V1ThreePrimary[];
};
export type V1ListThreePrimarySearchParams = {
  stockID?: string;
  start?: string;
  end?: string;
};
export type V1ListThreePrimaryRequest = {
  offset?: number;
  limit?: number;
  searchParams?: V1ListThreePrimarySearchParams;
};
export type V1CreateTransactionResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
};
export type V1CreateTransactionRequest = {
  orderType?: string;
  amount?: number;
};
export type V1User = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};
export type V1ListUsersResponse = {
  offset?: number;
  limit?: number;
  totalCount?: string;
  entries?: V1User[];
};
export type V1CreateUserResponse = {
  success?: boolean;
  status?: number;
  errorMessage?: string;
  errorCode?: string;
};
export type V1CreateUserRequest = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
};
export const {
  useJarvisV1GetBalanceQuery,
  useJarvisV1ListCategoriesQuery,
  useJarvisV1ListDailyCloseMutation,
  useJarvisV1LoginMutation,
  useJarvisV1LogoutMutation,
  useJarvisV1ListOrdersMutation,
  useJarvisV1CreateOrderMutation,
  useJarvisV1ListPickedStocksQuery,
  useJarvisV1InsertPickedStocksMutation,
  useJarvisV1DeletePickedStocksMutation,
  useJarvisV1ListSelectionsMutation,
  useJarvisV1GetStakeConcentrationMutation,
  useJarvisV1ListStocksMutation,
  useJarvisV1ListThreePrimaryMutation,
  useJarvisV1CreateTransactionMutation,
  useJarvisV1ListUsersQuery,
  useJarvisV1CreateUserMutation,
} = injectedRtkApi;
