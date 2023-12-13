import ChartGrid from '../stock/ChartGrid';
import Alert from '../general/Alert';
import { useDailyAnalysis } from '../../features/aggregators/dailyAnalysis';
import Calendar from '../stock/Calendar';
import { useState } from 'react';
import { addOneDay, formatDate, getDateTwoMonthsAgo } from '../utils/date';


const DailyAnalysis = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(formatDate(today));
  const [startDate, setStartDate] = useState(getDateTwoMonthsAgo(today));
  const [endDate, setEndDate] = useState(addOneDay(today));

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    setStartDate(getDateTwoMonthsAgo(date));
    setEndDate(addOneDay(date));
  };

  const { dailyCloses, loading, fetchError } = useDailyAnalysis(
    selectedDate,
    startDate,
    endDate
  );

  return (
    <header>
      <p className="mb-2 text-sm font-semibold text-blue-600">Selections</p>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        Analysis: Picked the highest possibility from concentration, scale and
        pressure for you to Win
      </h1>
      <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
        Analysis from selected date's stock performance, including the
        concentration, pressure, whether it is already break through the
        pressure point or ready to break through.
      </p>
      <Calendar onDateChange={handleDateChange} />
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
            <span className="font-semibold">Error:</span>{' '}
            {fetchError.data.message}
          </Alert>
        </div>
      )}
      {!loading && !fetchError && <ChartGrid data={dailyCloses} />}

      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <a
          className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Get the source code
        </a>
      </div>
    </header>
  );
};

export default DailyAnalysis;
