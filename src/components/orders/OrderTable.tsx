import ProfitDisplay from '../stock/ProfitDisplay';

function formatDate(input) {
  const dateString = input.toString();
  if (dateString.length !== 8) {
    throw new Error('Invalid date format. Expected YYYYMMDD.');
  }

  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  return `${year}/${month}/${day}`;
}

const OrderTable = ({ orders }) => {
  if (orders?.entries === undefined) {
    return <div></div>;
  }

  const quantityFormatter = new Intl.NumberFormat('en-US');
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-col mt-4 max-w-[40rem]">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
                <div className="mb-2 mr-6 md:mb-0">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Orders
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transaction history of your orders.
                  </p>
                </div>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-slate-800">
                <tr>
                  <th
                    scope="col"
                    className="pl-5 px-2 py-3 text-start whitespace-nowrap "
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Stock
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Type
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Buy
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Sell
                    </span>
                  </th>

                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Shares
                    </span>
                  </th>

                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Date
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      BEP
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-start whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Profit / Loss
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {orders ? (
                  orders.entries.map((entity) => (
                    <tr key={entity.id}>
                      <td className="h-px w-px whitespace-nowrap pl-5 px-2 py-3">
                        <div className="flex items-center gap-x-1">
                          <div className="grow">
                            <span className="block text-sm w-14 font-semibold text-gray-800 dark:text-white whitespace-normal">
                              {entity.stockName}
                            </span>
                            <span className="block text-sm text-gray-500">
                              {entity.stockID}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap py-3">
                        <span className="text-sm text-gray-800 dark:text-white">
                          {entity.buyExchangeDate ===
                          entity.sellExchangeDate ? (
                            <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-blue-900 text-white">
                              現沖
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-blue-500 text-dark">
                              現股
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap py-3">
                        <span className="text-sm text-gray-800 dark:text-white">
                          {parseFloat(entity.buyPrice).toFixed(2)}
                        </span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap py-3">
                        <span className="text-sm text-gray-800 dark:text-white">
                          {parseFloat(entity.sellPrice).toFixed(2)}
                        </span>
                      </td>

                      <td className="h-px w-px whitespace-nowrap py-3">
                        <span className="text-sm text-gray-800 dark:text-white">
                          {parseInt(entity.buyQuantity, 10) * 1000 > 0
                            ? quantityFormatter.format(
                                parseInt(entity.buyQuantity, 10) * 1000
                              )
                            : quantityFormatter.format(
                                parseInt(entity.sellQuantity, 10) * 1000
                              )}
                        </span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap px-1 py-3">
                        <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-md text-xs text-sm font-small bg-gray-600 text-white">
                          {entity.buyExchangeDate !== ''
                            ? formatDate(entity.buyExchangeDate)
                            : formatDate(entity.sellExchangeDate)}
                        </span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap px-1 py-3">
                        <span className="text-sm font-bold text-gray-800 dark:text-white">
                          {parseFloat(entity.profitablePrice).toFixed(2)}
                        </span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap px-1 py-3">
                        <ProfitDisplay
                          profit={formatter.format(entity.profitLoss)}
                          quoteChange={entity.profitLossPercent}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-3">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
