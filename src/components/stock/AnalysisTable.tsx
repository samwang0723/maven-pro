import RateBadge from './RateBadge';

const AnalysisTable = ({ data }) => {
  return (
    <div className="max-w-[85rem] px-1 py-2 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Cryptocurrency Prices by Market Cap
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The global cryptocurrency market cap today is $1.09 Trillion,
                  a <span className="text-green-500">0.5%</span> change in the
                  last 24 hours.
                </p>
              </div>

              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap min-w-[10rem]"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Stock
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Industry
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Last Close
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Percentage
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Volume
                      </span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        1 Day
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        5 Day
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        10 Day
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        20 Day
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        60 Day
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Trust
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Trust 10 Day
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Foreign
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start whitespace-nowrap"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Foreign 10 Day
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {data && data.entries && data.entries.length > 0 ? (
                    data.entries.map((stock) => (
                      <tr key={stock.stockID}>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="font-semibold text-sm text-gray-800 dark:text-white">
                              {stock.stockID}
                            </span>
                            <span className="text-xs text-gray-500">
                              {stock.name}
                            </span>
                            <RateBadge analysis={stock} />
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.category}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-red-500">
                            {stock.close}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-green-500">
                            {stock.quoteChange}%
                          </span>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <span className="text-sm text-red-500">
                            {stock.volume}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.concentration1}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.concentration5}
                          </span>
                        </td>

                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.concentration10}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.concentration20}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.concentration60}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.trust}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.trust10}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.foreign}
                          </span>
                        </td>
                        <td className="h-px w-px whitespace-nowrap px-6 py-3">
                          <span className="text-sm text-gray-800 dark:text-white">
                            {stock.foreign10}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisTable;
