import { jarvisApi } from '../../features/apis/jarvisApi';
import { V1ListOrderResponse } from '../../features/apis/jarvisApi';
import { useEffect, useState } from 'react';

const Stat = () => {
  const [orderApi] = jarvisApi.useJarvisV1ListOrdersMutation();
  const { data, error } = jarvisApi.useJarvisV1GetBalanceQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const [openOrder, setOpenOrder] = useState(0);
  const [avgProfit, setAvgProfit] = useState(0);

  const fetchOrders = async () => {
    try {
      const orderData = await orderApi({
        v1ListOrderRequest: {
          offset: 0,
          limit: 100,
          searchParams: {}
        },
      }).unwrap();

      if (!orderData.entries || orderData.entries.length === 0) {
        return;
      }

      // loop entries
      var totalProfit = 0;
      var openOrderCount = 0;
      for (let i = 0; i < orderData.entries.length; i++) {
        const entry = orderData.entries[i];
        if (entry.status !== 'closed') {
          openOrderCount += 1;
        }
        totalProfit += entry.profitLossPercent;
      }
      setAvgProfit(totalProfit / orderData.entries.length);
      setOpenOrder(openOrderCount);
    } catch (e) {
      console.log('fetchOrders error', e);
    }
  };

  console.log('useJarvisV1GetBalanceQuery', error);

  useEffect(() => {
    fetchOrders();
  }, []);


  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 inline-block">
        <div className="p-4 md:p-5 flex gap-x-4">
          <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
          </div>

          <div className="grow">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Current Balance
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    The available balance in wallet
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {data?.balance?.available ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol', maximumFractionDigits: 0 }).format(data?.balance?.available) : 0}
              </h3>
              <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
                <svg
                  className="inline-block w-4 h-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-xs font-medium">12.5%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 inline-block">
        <div className="p-4 md:p-5 flex gap-x-4">
          <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>

          <div className="grow">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Avg. Profit Rate
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {avgProfit.toFixed(2)}%
              </h3>
              <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                <svg
                  className="inline-block w-4 h-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                <span className="inline-block text-xs font-medium">1.7%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 inline-block">
        <div className="p-4 md:p-5 flex gap-x-4">
          <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
              <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
              <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
            </svg>
          </div>

          <div className="grow">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Open Orders
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    The count of open orders
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {openOrder}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
