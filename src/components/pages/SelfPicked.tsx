import ChartGrid from '../stock/ChartGrid';
import { usePickedStocks } from '../../features/aggregators/pickedStocks';
import Alert from '../general/Alert';
import {getDateTwoMonthsAgo} from '../utils/date';

const SelfPicked = () => {
  const today = new Date();
  const startDate = getDateTwoMonthsAgo(today); // Set the start date for the history search
  const { dailyCloses, loading, fetchError, refetch } =
    usePickedStocks(startDate);

  const handleRefetch = () => {
    refetch();
  };

  return (
    <header>
      <p className="mb-2 text-sm font-semibold text-blue-600">Selections</p>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        Watchlist: Based on daily subscribed selections
      </h1>
      <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
        Suggest to pick from daily selection and put into watch list, if price
        fall through the lowest price 2 days ago, remove it.
      </p>
      {loading && (
        <button
          type="button"
          className="flex justify-center items-center h-[2.875rem] w-[2.875rem] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-2"
        >
          <span
            className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </span>
        </button>
      )}
      {fetchError && (
        <div className="flex mt-4">
          <Alert show={true} onDismiss={() => {}}>
            <span className="font-semibold">Error: </span>Unable to fetch watchlist
          </Alert>
        </div>
      )}
      {!loading && !fetchError && (
        <ChartGrid data={dailyCloses} refetch={handleRefetch} />
      )}

      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <a
          className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
          target="_blank"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-down-dash"><path d="M15 5H9"/><path d="M15 9v3h4l-7 7-7-7h4V9h6z"/></svg>
          Download analysis report
        </a>
      </div>
    </header>
  );
};

export default SelfPicked;
